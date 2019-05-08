// Basic app requirements and setup
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listen for connections on the PORT
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});