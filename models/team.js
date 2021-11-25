const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    formation: String,
    players: [{ type: Schema.Types.ObjectId, ref: "Player" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", teamSchema);
