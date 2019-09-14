const mongoose = require("mongoose");

const connectToDb = dbUrl => {
  mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connection OK!");
    })
    .catch(err => {
      console.error("Database connection error", err);
    });
};

module.exports = connectToDb;
