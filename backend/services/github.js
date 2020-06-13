const axios = require('axios');

const errors = require('../config/errors');

const instance = axios.create({
  timeout: 30000,
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${process.env.GITHUB_OAUTH_TOKEN}`,
  }
});

const dataFilters = {
  owner: owner => ({
    login: owner.login,
    avatar_url: owner.avatar_url,
    html_url: owner.html_url,
  }),
  repo: repo => ({
    full_name: repo.full_name,
    owner: dataFilters.owner(repo.owner),
    html_url: repo.html_url,
    description: repo.description,
    stargazers_count: repo.stargazers_count,
    watchers_count: repo.watchers_count,
    parent: (repo.parent ? dataFilters.repo(repo.parent) : null),
  }),
  commit: commit => ({
    sha: commit.sha,
    commit: commit.commit,
    author: dataFilters.owner(commit.author),
    parents: commit.parents,
    html_url: commit.html_url,
  }),
  commitComplete: commit => ({
    sha: commit.sha,
    commit: commit.commit,
    author: dataFilters.owner(commit.author),
    parents: commit.parents,
    html_url: commit.html_url,
    stats: commit.stats,
    files: commit.files,
  }),
  branch: branch => ({
    name: branch.name,
    commit: branch.commit,
    protected: branch.protected
  }),
  pullRequestTarget: target => ({
    ref: target.ref,
    user: dataFilters.owner(target.user),
    repo: dataFilters.repo(target.repo),
  }),
  pullRequest: pullRequest => ({
    html_url: pullRequest.html_url,
    number: pullRequest.number,
    state: pullRequest.state,
    title: pullRequest.title,
    user: dataFilters.owner(pullRequest.user),
    body: pullRequest.body,
    created_at: pullRequest.created_at,
    closed_at: pullRequest.closed_at,
    merged_at: pullRequest.merged_at,
    assignee: (pullRequest.assignee ? dataFilters.owner(pullRequest.assignee) : null),
    head: dataFilters.pullRequestTarget(pullRequest.head),
    base: dataFilters.pullRequestTarget(pullRequest.base),
  }),
};

const getRepo = async (user, repo) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}`,
    method: 'get',
  });

  return dataFilters.repo(data.data);
};

const getCommits = async (user, repo, branch) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}/commits`,
    method: 'get',
    params: {
      sha: branch,
    },
  });

  return data.data.map(dataFilters.commit);
};

const getCommitDetail = async (user, repo, ref) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}/commits/${ref}`,
    method: 'get',
  });

  return dataFilters.commitComplete(data.data);
};

const getAuthors = async (user, repo) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}/contributors`,
    method: 'get',
  });

  return data.data.map(dataFilters.owner);
};

const getBranches = async (user, repo) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}/branches`,
    method: 'get',
  });

  return data.data.map(dataFilters.branch);
};

const getPullRequests = async (user, repo) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}/pulls`,
    method: 'get',
  });

  return data.data.map(dataFilters.pullRequest);
};

const openPullRequest = async (user, repo, params) => {
  try {
    const data = await instance.request({
      url: `repos/${user}/${repo}/pulls`,
      method: 'post',
      data: params,
    });

    return dataFilters.pullRequest(data.data);
  } catch (err) {
    if (err.response.status == 422) {
      throw new errors.UnprocessableEntity(err.response.data.errors.map(e => e.message));
    } else {
      throw err;
    }
  }
};

const mergePullRequest = async (user, repo, number) => {
  try {
    const data = await instance.request({
      url: `repos/${user}/${repo}/pulls/${number}/merge`,
      method: 'put',
    });

    return data.data;
  } catch (err) {
    throw new errors.Conflict(err.response.data.message);
  }
};

const closePullRequest = async (user, repo, number) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}/pulls/${number}`,
    method: 'patch',
    data: {
      state: "closed",
    }
  });

  return dataFilters.pullRequest(data.data);
};

module.exports = {
  getRepo,
  getCommits,
  getCommitDetail,
  getAuthors,
  getBranches,
  getPullRequests,
  openPullRequest,
  mergePullRequest,
  closePullRequest,
};
