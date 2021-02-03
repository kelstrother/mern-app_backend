
require("dotenv").config()
const { MONGODBURI } = process.env;
// const mongoURI = 'mongodb://localhost:27017/' + 'guitars'
const mongoose = require('mongoose')
const config = { useUnifiedTopology: true, useNewUrlParser: true }
const DB = mongoose.connection

mongoose.connect(MONGODBURI, config)

DB.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));

module.exports = mongoose;