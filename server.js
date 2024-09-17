const express = require("express");

const Pizza = require('./models/pizzaModel.js')
const app = express();
const db = require("./db.js")
// const db = require("./db.js"); // Ensure this file handles database connection

// Middleware to parse JSON requests
app.use(express.json());

// Import and use routes
const pizzasRoute = require("./routes/pizzasRoute.js");
const userRoute = require('./routes/userRoute.js')
const ordersRoute = require('./routes/ordersRoute.js')



app.use("/api/pizzas/", pizzasRoute);
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)


app.get("/", (req, res) => {
  // res.send("Server working 🔥" + port);
  res.send("Server working 🔥");
});


// Root route for testing
app.get("/getpizzas", (req, res) => {
  Pizza.find({}, (err , docs) =>{
    if(err) {
      console.log(err)
    }
    else{
      res.send(docs)
    }
  })

});


// Define the port and start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server working on port ${port} 🔥`);
});

// Optional: Global error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });
