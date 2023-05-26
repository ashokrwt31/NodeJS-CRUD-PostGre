const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty) {
    let error = {};
    error.array().map((err) => (error[err.param] = err.message));
    return res.status(422).json({ error });
  }
  next();
};
