const pool = require("../config/db.config");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");
const jwtExpirySeconds = 300;

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    var response = await pool.query("SELECT * FROM userdata WHERE email = $1", [
      email,
    ]);
    if (response.rows) {
      res.json({
        message: "Registration failed!",
        body: {
          result: {
            message:
              "This ${email} is already register in the system, Please try with differnt email id.",
          },
        },
      });
      return;
    }

    response = await pool.query(
      "INSERT INTO userdata(firstName, lastName, email, password) VALUES ($1, $2, $3, $4)",
      [firstName, lastName, email, password]
    );
    res.json({
      message: "Record inserted successfully",
      body: {
        result: { name: firstName + lastName, "email Id": email },
      },
    });
  } catch (error) {
    res.send("Error: " + error);
  }
};

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await pool.query(
      "SELECT * FROM userdata WHERE email = $1",
      [email]
    );
    if (response) {
      const token = jwt.sign({ email }, authConfig.secret, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
      });
      res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
      res.status(200).json({ status: 200, token: token });
      res.end();
    } else {
      return res.status(401).end();
    }
  } catch (error) {
    res.send("Error: " + error);
  }
};

const UserAuthentication = {
  login: login,
  register: register,
};
module.exports = UserAuthentication;
