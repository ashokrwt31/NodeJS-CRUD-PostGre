const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No access token, Unauthorized access!",
    });
  }
  jwt.verify(token, authConfig.secret, (err, decoded) => {
    console.log("decoded....", err, decoded);
    if (err) {
      return res.status(401).send({
        message: "Unauthorized access!",
      });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
