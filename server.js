//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/wb-sp19s1-bteeman-angular'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/wb-sp19s1-bteeman-angular/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
