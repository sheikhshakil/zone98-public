const { validationResult } = require("express-validator");
const formatter = require("../api/validationFormatter");
const { db } = require("../configs/firebase");

exports.registerGetController = (req, res) => {
  res.render("pages/auth.ejs", { title: "Register", action: "register" });
};

exports.loginGetController = (req, res) => {
  res.render("pages/auth.ejs", { title: "Login", action: "login" });
};

exports.registerPostController = (req, res) => {
  const { fullName, email, password } = req.body;
  let errors = validationResult(req).formatWith(formatter);

  if (!errors.isEmpty()) {
    errors = errors.mapped();
    return res.render("pages/auth.ejs", {
      errors,
      values: { fullName, email, password },
      title: "Register",
      action: "register",
    });
  } else {
    const userData = {
      fullName,
      email,
      password,
      wishlist: [],
      bidCoins: 0,
    };
    db.collection("customers")
      .doc(email)
      .set(userData)
      .then(() => {
        res.redirect("/profile?regSuccess=true");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.loginPostController = (req, res) => {
  res.send("Got data");
};
