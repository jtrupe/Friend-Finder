var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (res, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var bff = {
            name: '',
            photo: '',
            difference: 50
        };
 
        console.log(req.body);

        var friendData = req.body;
        var friendScores = friendData.scores;

        console.log(friendScores);

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            var totalDifference = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                var diff = Math.abs(friendScores[j] - friends[i].scores[j])
                totalDifference += diff;


            }
        }
    })
}