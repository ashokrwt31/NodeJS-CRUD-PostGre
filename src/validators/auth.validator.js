const { check, validationResult } = require("express-validator");

exports.register = () => {
  return [
    check("email").isEmail().withMessage("Enter a valid email address"),
    check("password")
      .not()
      .isEmpty()
      .isLength({ min: 6 })
      .withMessage("Must be at least 6 chars long"),
    check("firstName")
      .not()
      .isEmpty()
      .withMessage("You first name is required"),
    check("lastName").not().isEmpty().withMessage("You last name is required"),
  ];
};

exports.login = () => {
  return [
    check("email").isEmail().withMessage("Enter a valid email address"),
    check("password").not().isEmpty(),
  ];
};
