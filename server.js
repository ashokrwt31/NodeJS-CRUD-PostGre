const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Listening to the port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./src/routes/index")(app);
