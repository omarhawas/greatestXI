const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    name: String,
    position: String,
    club: String,
    country: String,
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Player", playerSchema);
