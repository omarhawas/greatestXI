const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");

router.post("/teams/:id/comments", commentsCtrl.create);
router.get("teams/:id/comments", commentsCtrl.allComments);

module.exports = router;
