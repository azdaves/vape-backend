const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  mongoose
    .connect(
      config.get("db"),
      { useNewUrlParser: true, useCreateIndex: true }
    )
    .then(() => console.log("connected to DB"))
    .catch(ex => console.error("Failed to connect to DB", ex));
};
