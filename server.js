const express = require("express");

const Pizza = require("./models/pizzaModel.js");

const app = express();
const db = require("./db.js");
// const { error } = require("console");
app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoot.js");

app.use("/api/pizzas/", pizzasRoute);

app.get("/", (req, res) => {
  res.send("Server working 🔥" + port);
});
const port = process.env.PORT || 5000;
app.listen(port, () => "Server working on port port 🔥");
