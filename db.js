const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://shumailagmg:Saman1234@cluster0.yh0djmv.mongodb.net/mern-pizza?retryWrites=true&w=majority";

// Connect to MongoDB with options for the connection
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error);
  });

module.exports = mongoose;
