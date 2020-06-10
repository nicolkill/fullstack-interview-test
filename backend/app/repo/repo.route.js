const {
  getRepo,
} = require('./repo.controller');

const route = (router) => {
  router.get('/:user/:repo', getRepo);
};

module.exports = {
  route,
};
