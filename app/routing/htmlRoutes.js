var path = require('path');

module.exports = function (app) {
  // Route for the survey
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // Default * route
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
