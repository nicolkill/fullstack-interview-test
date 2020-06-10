const github = require('../../services/github');

const getRepo = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getRepo(user, repo);

  res.success({
    data
  });
};

const getCommits = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getCommits(user, repo);

  res.success({
    data
  });
};

const getAuthors = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getAuthors(user, repo);

  res.success({
    data
  });
};

const getBranches = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getBranches(user, repo);

  res.success({
    data
  });
};

module.exports = {
  getRepo,
  getCommits,
  getAuthors,
  getBranches,
};