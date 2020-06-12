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

export default {
  getRepo,
  getAuthors,
  getBranches,
  getCommits,
};
