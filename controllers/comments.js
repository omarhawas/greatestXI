const Team = require("../models/team");

module.exports = {
  create,
  allComments,
};

function create(req, res) {
  console.log("req", req.body);
  Team.findById(req.params.id, function (err, team) {
    team.comments.push(req.body);
    team.save(function (err) {
      res.redirect(`/teams/${team._id}`);
    });
  });
}

function allComments(req, res) {
  Comment.find({}, function (err, comments) {
    res.render(`/teams/${team._id}`, {
      title: "Comments",
      comments,
    });
  });
}
