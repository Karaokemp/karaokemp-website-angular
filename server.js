const PORT = process.env.PORT || 8080;

const express = require('express');
const app = express();

app.get('/test', function(req, res){
    res.send('hello world');
  });
  

  app.use(express.static('dist/website-frontend'));
  // Start the app by listening on the default
  // Heroku port
  
  app.listen(PORT);
console.log(`listenning on port ${PORT}`);
