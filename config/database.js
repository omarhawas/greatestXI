const mongoose = require("mongoose");

mongoose.connect(
  (DATABASE_URL =
    "mongodb+srv://ohawas:plikmo11@sei.ii2gr.mongodb.net/greatestXI?retryWrites=true&w=majority")
);

//shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
