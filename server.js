const PORT = process.env.PORT || 8080;

const express = require('express');
const app = express();

  app.use(express.static('dist/website-frontend'));

  app.get('/*', function(req, res) {
    let path = `${__dirname}/dist/website-frontend/index.html`;
    console.log(`path: ${path}`);
    res.sendFile(path);
  });

  app.listen(PORT);
console.log(`listenning on port ${PORT}`);
