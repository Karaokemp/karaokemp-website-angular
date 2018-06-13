const PORT = process.env.PORT || 8080;

const express = require('express');
const app = express();

  app.use(express.static('dist/website-frontend'));

  app.get('/*', function(req, res) {
    res.redirect(301, '/');
  });

  app.listen(PORT);
console.log(`listenning on port ${PORT}`);
