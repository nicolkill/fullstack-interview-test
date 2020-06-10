const { app } = require('./config/express');

const port = process.env.PORT || 4000;

app.listen(port);
console.log(`http://localhost:${port}`);
