const {
  getRepo,
  getCommits,
  getCommitDetail,
  getAuthors,
  getBranches,
  getPullRequests,
  openPullRequest,
  mergePullRequest,
  closePullRequest,
} = require('./repo.controller');

const route = (router) => {
  router.get('/:user/:repo', getRepo);
  router.get('/:user/:repo/commits', getCommits);
  router.get('/:user/:repo/commits/:ref', getCommitDetail);
  router.get('/:user/:repo/authors', getAuthors);
  router.get('/:user/:repo/branches', getBranches);
  router.get('/:user/:repo/pull_requests', getPullRequests);
  router.post('/:user/:repo/pull_requests', openPullRequest);
  router.put('/:user/:repo/pull_requests/:number', mergePullRequest);
  router.delete('/:user/:repo/pull_requests/:number', closePullRequest);
};

module.exports = {
  route,
};
