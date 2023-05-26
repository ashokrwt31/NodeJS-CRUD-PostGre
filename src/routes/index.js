const userAuth = require("./userAuth.route");
const employee = require("./employee.route");
const authenticate = require("../middlewares/authenticate");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send({
      message:
        "Welcome to the AUTHENTICATION API. Register or Login to test Authentication.",
    });
  });

  app.use("/api/userAuth", userAuth);
  app.use("/api/employee", authenticate, employee);
};
