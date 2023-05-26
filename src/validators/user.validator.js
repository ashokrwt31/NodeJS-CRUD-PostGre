const { check } = require("express-validator");

exports.createUserValidation = (method) => {
  switch (method) {
    case "createUser": {
      return [
        check("email", "Email length should be 10 to 30 characters")
          .isEmail()
          .isLength({ min: 10, max: 30 }),
        check(
          "firstName",
          "firstName length should be 1 to 20 characters"
        ).isLength({ min: 1, max: 20 }),
        check(
          "lastName",
          "lastName length should be 1 to 20 characters"
        ).isLength({ min: 1, max: 20 }),
        check(
          "phoneNumber",
          "Mobile number should contains 10 digits"
        ).isLength({
          min: 10,
          max: 10,
        }),
      ];
    }
  }
};

exports.updateUserValidation = (method) => {
  switch (method) {
    case "updateUser": {
      return [
        check("email", "Email length should be 10 to 30 characters")
          .isEmail()
          .isLength({ min: 10, max: 30 }),
        check(
          "firstName",
          "firstName length should be 1 to 20 characters"
        ).isLength({ min: 1, max: 20 }),
        check(
          "lastName",
          "lastName length should be 1 to 20 characters"
        ).isLength({ min: 1, max: 20 }),
        check(
          "phoneNumber",
          "Mobile number should contains 10 digits"
        ).isLength({
          min: 10,
          max: 10,
        }),
        check("empId", "Employee Id should contains interger value")
          .notEmpty()
          .isInt({
            min: 1,
            max: 100,
          }),
      ];
    }
  }
};

exports.userIdValidation = () => {
  return [
    check("empId", "Employee Id should contains interger value")
      .notEmpty()
      .isInt({
        min: 1,
        max: 100,
      }),
  ];
};
