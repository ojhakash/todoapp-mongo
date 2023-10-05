const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./api/user");

const app = express();
const PORT = 3050;
require("dotenv").config();

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/todoappdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    server = app.listen(3050, () => {
      console.log(`Listening to port ${3050}`);
    });
  });
