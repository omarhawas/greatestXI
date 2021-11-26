const Team = require("../models/team");
const Player = require("../models/player");

function index(req, res) {
  Team.find({}, function (err, teams) {
    res.render("teams/index", { title: "Greatest XI's", teams });
  });
}

function newTeam(req, res) {
  res.render("teams/new", { title: "Add Team" });
}

function create(req, res) {
  console.log("a req", req);
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const team = new Team(req.body);
  team.save(function (err) {
    if (err) return res.redirect("/teams/new");
    res.redirect(`/teams`);
  });
}

function show(req, res) {
  Team.findById(req.params.id)
    .populate("players")
    .exec(function (err, team) {
      Player.find({}, function (err, players) {
        res.render("teams/show", {
          title: "Team Details",
          team,
          players: players,
        });
      });
    });
}

function deleteTeam(req, res) {
  Team.deleteOne({ id: req.params.id }, function (err) {
    res.redirect("/teams");
  });
}

function addPlayerToTeam(req, res) {
  Team.findById(req.params.id, function (err, team) {
    team.players.push(req.body.playerId);
    team.save(function (err) {
      res.redirect(`/teams/${team._id}`);
    });
  });
}

function edit(req, res) {
  Team.findById(req.params.id, function (err, team) {
    res.render("teams/edit", { team: team, title: "Edit Page" });
  });
}

function update(req, res) {
  Team.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
    res.redirect("/teams/");
  });
}

module.exports = {
  index,
  new: newTeam,
  create,
  show,
  delete: deleteTeam,
  addPlayerToTeam,
  edit,
  update,
};
