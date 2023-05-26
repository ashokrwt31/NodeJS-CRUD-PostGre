const { Pool } = require("pg");

const pool = new Pool({
  user: "localuser",
  host: "localhost",
  database: "localData",
  password: "12345",
  port: 5432,
});

module.exports = pool;
