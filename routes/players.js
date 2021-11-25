const express = require("express");
const router = express.Router();
const playersCtrl = require("../controllers/players");

router.get("/new", playersCtrl.new);
router.post("/", playersCtrl.create);

module.exports = router;
