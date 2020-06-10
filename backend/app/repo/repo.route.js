const {
  getRepo,
  getCommits,
} = require('./repo.controller');

const route = (router) => {
  router.get('/:user/:repo', getRepo);
  router.get('/:user/:repo/commits', getCommits);
};

module.exports = {
  route,
};
