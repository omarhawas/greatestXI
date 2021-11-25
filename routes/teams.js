const express = require("express");
const router = express.Router();
const teamCtrl = require("../controllers/teams");

router.get("/", teamCtrl.index);
router.get("/new", teamCtrl.new);
router.post("/", teamCtrl.create);
router.get("/:id", teamCtrl.show);
router.delete("/:id", teamCtrl.delete);
router.post("/:id/players", teamCtrl.addPlayerToTeam);
router.get("/:id/edit", teamCtrl.edit);
router.put("/:id", teamCtrl.update);

module.exports = router;
