const axios = require('axios');
const instance = axios.create({
  timeout: 30000,
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  }
});

const getRepo = async (user, repo) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}`,
    method: 'get',
  });

  const repoData = data.data;
  return {
    full_name: repoData.full_name,
    owner: repoData.owner,
    html_url: repoData.html_url,
    description: repoData.description,
    stargazers_count: repoData.stargazers_count,
    watchers_count: repoData.watchers_count,
    parent: repoData.parent,
  };
};

const getCommits = async (user, repo) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}/commits`,
    method: 'get',
  });

  return data.data.map(e => ({
    sha: e.sha,
    node_id: e.node_id,
    commit: e.commit,
    author: e.author,
    parents: e.parents,
  }));
};

const getAuthors = async (user, repo) => {
  const data = await instance.request({
    url: `repos/${user}/${repo}/collaborators`,
    method: 'get',
  });

  return data.data.map(e => ({
    sha: e.sha,
    node_id: e.node_id,
    commit: e.commit,
    author: e.author,
    parents: e.parents,
  }));
};

module.exports = {
  getRepo,
  getCommits,
  getAuthors,
};
