const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: String,
  },
  {
    timestamps: true,
  }
);

const teamSchema = new Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    formation: String,
    players: [{ type: Schema.Types.ObjectId, ref: "Player" }],
    comments: [commentSchema],
    upvoteCount: {
      type: Number,
      default: 0,
    },
    downvoteCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", teamSchema);
