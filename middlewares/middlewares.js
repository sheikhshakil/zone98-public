const express = require("express");
const setLocals = require("./setLocals");
const session = require("express-session");

const middlewares = [
  express.static("public"),
  express.json(),
  express.urlencoded({ extended: true }),
  session({
    cookie: {
      secure: false,
      maxAge: 604800000,
    },
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  }),
  setLocals(),
];

module.exports = (app) => {
  middlewares.forEach((middleware) => {
    app.use(middleware);
  });
};
