//
// Main file for the backend server
// All the routes will be managed from here
//
// @author Ido
// @update 2020/05/30
//
const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./models/user");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// allow CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// test route - TODO: remove it
app.get("/", (req, res, next) => {
  res.send("<h1>🚀</h1>");
});

//CRUD routes for userse
app.use("/users", require("./routes/users"));

//
// 🚨 error handling
//
app.use((error, req, res, next) => {
  console.log("🚨 Error caught in index.js");
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//
// sync/connect database
//
sequelize
  .sync()
  .then((result) => {
    console.log("Database connected successfully");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
