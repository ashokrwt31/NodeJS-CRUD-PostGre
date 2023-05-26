const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const UserValidation = require("../validators/user.validator");
const Employee = require("../controllers/employee.controller");

router.get("/", Employee.getAllEmployee);

router.get(
  "/:id",
  UserValidation.userIdValidation(),
  validate,
  Employee.getEmployeeById
);

router.post(
  "/",
  UserValidation.createUserValidation("createUser"),
  validate,
  Employee.newEmployee
);

module.exports = router;
