const axios = require('axios');

const instance = axios.create({
  timeout: 30000,
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
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
    node_id: commit.node_id,
    commit: commit.commit,
    author: dataFilters.owner(commit.author),
    parents: commit.parents,
  }),
  branch: branch => ({
    name: branch.name,
    commit: branch.commit,
    protected: branch.protected
  }),
};

const getRepo = async (user, repo) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}`,
    method: 'get',
  });

  return dataFilters.repo(data.data);
};

const getCommits = async (user, repo) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}/commits`,
    method: 'get',
  });

  return data.data.map(dataFilters.commit);
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

module.exports = {
  getRepo,
  getCommits,
  getAuthors,
  getBranches,
};
