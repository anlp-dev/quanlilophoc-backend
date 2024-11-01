const path = require("path");
const express = require("express");
const morgan = require("morgan");


const configViewEngine = (app) => {
  // configure template engine
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  // config morgan
  app.use(morgan("dev"));
  // config static files
  app.use(express.static(path.join(__dirname, "../public")));

};

module.exports = configViewEngine;
