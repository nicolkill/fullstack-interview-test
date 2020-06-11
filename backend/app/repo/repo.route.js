const {
  getRepo,
  getCommits,
  getCommitDetail,
  getAuthors,
  getBranches,
} = require('./repo.controller');

const route = (router) => {
  router.get('/:user/:repo', getRepo);
  router.get('/:user/:repo/commits', getCommits);
  router.get('/:user/:repo/commits/:ref', getCommitDetail);
  router.get('/:user/:repo/authors', getAuthors);
  router.get('/:user/:repo/branches', getBranches);
};

module.exports = {
  route,
};
