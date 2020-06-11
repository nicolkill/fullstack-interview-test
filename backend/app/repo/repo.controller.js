const github = require('../../services/github');

const getRepo = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getRepo(user, repo);

  res.success({
    data
  });
};

const getCommits = async (req, res) => {
  const {branch} = req.query;
  const {user, repo} = req.params;
  const data = await github.getCommits(user, repo, branch);

  res.success({
    data
  });
};

const getCommitDetail = async (req, res) => {
  const {user, repo, ref} = req.params;
  const data = await github.getCommitDetail(user, repo, ref);

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
  getCommitDetail,
  getAuthors,
  getBranches,
};