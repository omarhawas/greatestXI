const mongoose = require("mongoose");

if (process.env.NODE_ENV === "production") {
  mongoose.connect(
    (DATABASE_URL =
      "mongodb+srv://ohawas:plikmo11@sei.ii2gr.mongodb.net/greatestXI?retryWrites=true&w=majority")
  );
} else {
  mongoose.connect("mongodb://127.0.0.1:27017/greatestXI");
}

//shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
