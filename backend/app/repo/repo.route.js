const {
  getRepo,
  getCommits,
  getAuthors,
} = require('./repo.controller');

const route = (router) => {
  router.get('/:user/:repo', getRepo);
  router.get('/:user/:repo/commits', getCommits);
  router.get('/:user/:repo/authors', getAuthors);
};

module.exports = {
  route,
};
