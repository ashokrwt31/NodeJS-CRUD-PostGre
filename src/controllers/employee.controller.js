const pool = require("../config/db.config");

exports.newEmployee = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const response = await pool.query(
      "INSERT INTO employees(firstName, lastName, email, phoneNumber) VALUES ($1, $2, $3, $4)",
      [firstName, lastName, email, phoneNumber]
    );
    res.json({
      message: "Record inserted successfully",
      body: {
        result: { firstName, lastName, email, phoneNumber },
      },
    });
  } catch (error) {
    res.send("Error: " + error);
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      "SELECT * FROM employees WHERE empId = $1",
      [id]
    );
    res.json(response.rows);
  } catch (error) {
    res.send("Error: " + error);
  }
};

exports.getAllEmployee = async (req, res) => {
  try {
    const response = await pool.query("SELECT * from employees");
    res.json(response.rows);
  } catch (error) {
    res.send("Error: " + error);
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      "DELETE FROM employees WHERE empId = $1",
      [id]
    );
    res.json(`Employee ${id} deleted successfully`);
  } catch (error) {
    res.send("Error: " + error);
  }
};

exports.updateEmployeeInfo = async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, email, phoneNumber } = req.body;
    const response = await pool.query(
      "UPDATE employees SET firstName = $1,lastName=$2 ,email=$3, phoneNumber=$4  WHERE empId = $5",
      [firstName, lastName, email, phoneNumber, id]
    );
    res.json("User updated successfully");
  } catch (error) {
    res.send("Error: " + error);
  }
};
