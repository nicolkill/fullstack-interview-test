const mongoose = require('./config/mongoose');
const express = require('./config/express');

const port = process.env.PORT || 4000;

(async () => {
  mongoose();

  const app = express();
  app.listen(port);
  console.log(`http://localhost:${port}`);
})();
