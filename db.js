const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://shumailagmg:Saman1234@cluster0.yh0djmv.mongodb.net/mern-pizza";

mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log("Mongo DB Connection failed");
});

module.exports = mongoose;
