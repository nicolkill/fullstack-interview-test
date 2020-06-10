const github = require('../../services/github');

const getRepo = async (req, res) => {
  const {user, repo} = req.params;
  const data = await github.getRepo(user, repo);

  res.success({
    data
  });
};

module.exports = {
  getRepo,
};