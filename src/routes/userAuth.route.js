const express = require("express");
const router = express.Router();
const UserAuth = require("../controllers/userAuth.controller");
const AuthValidation = require("../validators/auth.validator");
const validate = require("../middlewares/validate");

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      "You are in the Auth Endpoint. Register or Login to test Authentication.",
  });
});

router.post("/login", AuthValidation.login(), validate, UserAuth.login);

router.post(
  "/register",
  AuthValidation.register(),
  validate,
  UserAuth.register
);

module.exports = router;
