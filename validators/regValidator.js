const { body } = require("express-validator");

const regValidator = [
  body("fullName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name cannot be blank!")
    .not()
    .isInt()
    .withMessage("Please provide your name!"),

  body("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Please provide a valid Email!")
    .toLowerCase(),

  body("password")
    .not()
    .isEmpty()
    .withMessage("Password can't be empty!")
    .isLength({ min: 5, max: 15 })
    .withMessage("Please provide a password of 5 to 15 characters!"),
];

module.exports = regValidator;
