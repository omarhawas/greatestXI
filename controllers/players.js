const Player = require("../models/player");
const Team = require("../models/team");

module.exports = {
  new: newPlayer,
  create,
};

function newPlayer(req, res) {
  Player.find({}, function (err, players) {
    console.log("players", players);
    res.render("players/new", {
      title: "Add Player",
      players,
    });
  });
}

function create(req, res) {
  const player = new Player(req.body);
  player.save(function (err) {
    if (err) {
      console.log("error", err);
      return res.redirect("/players/new");
    }
    res.redirect(`/teams`);
  });
}
