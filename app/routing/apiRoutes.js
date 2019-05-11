var friends = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function (req, res) {
    
    var newFriend = req.body;
    var newFriendScores = newFriend.scores.map(Number);

    var differenceArr = [];
    
    friends.forEach(function (currentFriend) {
      var currentFriendScores = currentFriend.scores;
      var currentFriendName = currentFriend.name
      var totalDifference = 0;
      currentFriendScores.forEach(function (currentScore, index) {
        totalDifference += Math.abs(currentScore - newFriendScores[index]);
      })
      var differenceData = { 
        name: currentFriendName,
        difference: totalDifference
      };
      differenceArr.push(differenceData);
    });

    differenceArr.sort(function (a, b) {
      return a.difference - b.difference;
    });

    var userMatch = differenceArr[0].name;
    console.log(userMatch);

    var userMatchData = friends.find(object => object.name === userMatch);
    console.log(userMatchData);

    friends.push(req.body);
    res.json(userMatchData);
  });
};
