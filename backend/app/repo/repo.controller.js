const PullRequest = require('mongoose').model('PullRequest');

const github = require('../../services/github');
const validator = require('../../config/validator');

const pullRequestStatus = pr => ({
  ...pr,
  state: (pr.merged_at ? 'merged' : pr.state),
});

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
  let data = await github.getPullRequests(user, repo);

  data = data.map(pullRequestStatus);

  data.forEach(async pr => {
    let pull = await PullRequest.findOne({
      id: pr.id,
      number: pr.number,
    });

    if (pull) {
      await PullRequest.findByIdAndUpdate(
        pull._id,
        pr,
      );
    } else {
      pull = new PullRequest(pr);
      await pull.save();
    }
  });

  res.success({
    data,
  });
};

const openPullRequest = async (req, res) => {
  const body = req.body;
  const {user, repo} = req.params;

  validator.validate(body, {
    title: [validator.ValidationTypes.Exist, validator.ValidationTypes.String],
    body: [validator.ValidationTypes.Exist, validator.ValidationTypes.String],
    head: [validator.ValidationTypes.Exist, validator.ValidationTypes.String],
    base: [validator.ValidationTypes.Exist, validator.ValidationTypes.String],
  });

  let data = await github.openPullRequest(user, repo, body);
  data = pullRequestStatus(data);

  const pull = new PullRequest(data);
  await pull.save();

  res.success({
    data,
  });
};

const mergePullRequest = async (req, res) => {
  const {id} = req.body;
  const {user, repo, number} = req.params;
  const data = await github.mergePullRequest(user, repo, number);

  await PullRequest.findOneAndUpdate(
    {
      id,
      number,
    },
    {
      state: 'merged',
      merged_at: Date.now(),
      closed_at: Date.now(),
    },
  );

  res.success({
    data,
  });
};

const closePullRequest = async (req, res) => {
  const {user, repo, number} = req.params;

  let data = await github.closePullRequest(user, repo, number);
  data = pullRequestStatus(data);

  await PullRequest.findOneAndUpdate(
    {
      id: data.id,
      number: data.number,
    },
    data,
  );

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