const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();

app.use(logger("tiny"));

app.use(express.static("public"));
//app.use('/css', express.static(path.join(__dirname, "/css")));

console.log(__dirname);
//app.use('/public', express.static(path.join(__dirname, "public")));


module.exports = app;