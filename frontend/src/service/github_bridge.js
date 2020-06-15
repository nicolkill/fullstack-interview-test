import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const instance = axios.create({
  baseURL,
});

const getRepo = async (user, repo) => {
  const data = await instance.request({
    url: `${user}/${repo}`,
    method: 'get',
  });

  return data.data;
};

const getAuthors = async (user, repo) => {
  const data = await instance.request({
    url: `${user}/${repo}/authors`,
    method: 'get',
  });

  return data.data;
};

const getBranches = async (user, repo) => {
  const data = await instance.request({
    url: `${user}/${repo}/branches`,
    method: 'get',
  });

  return data.data;
};

const getCommits = async (user, repo, branch) => {
  const data = await instance.request({
    url: `${user}/${repo}/commits`,
    method: 'get',
    params: {
      branch,
    },
  });

  return data.data;
};

const getCommitDetail = async (user, repo, sha) => {
  const data = await instance.request({
    url: `${user}/${repo}/commits/${sha}`,
    method: 'get',
  });

  return data.data;
};

const getPullRequests = async (user, repo) => {
  const data = await instance.request({
    url: `${user}/${repo}/pull_requests`,
    method: 'get',
  });

  return data.data;
};

const openPullRequest = async (user, repo, {title, body, head, base}) => {
  const data = await instance.request({
    url: `${user}/${repo}/pull_requests`,
    method: 'post',
    data: {
      title,
      body,
      head,
      base,
    },
  });

  return data.data;
};

const mergePullRequest = async (user, repo, number, id) => {
  const data = await instance.request({
    url: `${user}/${repo}/pull_requests/${number}`,
    method: 'put',
    data: {
      id,
    },
  });

  return data.data;
};

const closePullRequest = async (user, repo, number) => {
  const data = await instance.request({
    url: `${user}/${repo}/pull_requests/${number}`,
    method: 'delete',
  });

  return data.data;
};

export default {
  getRepo,
  getAuthors,
  getBranches,
  getCommits,
  getCommitDetail,
  getPullRequests,
  openPullRequest,
  mergePullRequest,
  closePullRequest,
};
