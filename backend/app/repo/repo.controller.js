const github = require('../../services/github');
const validator = require('../../config/validator');

const getRepo = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getRepo(user, repo);

  res.success({
    data,
  });
};

const getCommits = async (req, res) => {
  const {branch} = req.query;
  const {user, repo} = req.params;
  const data = await github.getCommits(user, repo, branch);

  res.success({
    data,
  });
};

const getCommitDetail = async (req, res) => {
  const {user, repo, ref} = req.params;
  const data = await github.getCommitDetail(user, repo, ref);

  res.success({
    data,
  });
};

const getAuthors = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getAuthors(user, repo);

  res.success({
    data,
  });
};

const getBranches = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getBranches(user, repo);

  res.success({
    data,
  });
};

const getPullRequests = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getPullRequests(user, repo);

  res.success({
    data,
  });
};

const openPullRequest = async (req, res) => {
  const params = req.body;
  const {user, repo} = req.params;

  validator.validate(params, {
    title: [validator.ValidationTypes.Exist, validator.ValidationTypes.String],
    body: [validator.ValidationTypes.Exist, validator.ValidationTypes.String],
    head: [validator.ValidationTypes.Exist, validator.ValidationTypes.String],
    base: [validator.ValidationTypes.Exist, validator.ValidationTypes.String],
  });

  const data = await github.openPullRequest(user, repo, params);

  res.success({
    data,
  });
};

const mergePullRequest = async (req, res) => {
  const {user, repo, number} = req.params;
  const data = await github.mergePullRequest(user, repo, number);

  res.success({
    data,
  });
};

const closePullRequest = async (req, res) => {
  const {user, repo, number} = req.params;
  const data = await github.closePullRequest(user, repo, number);

  res.success({
    data,
  });
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