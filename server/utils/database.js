//database.js

const mongoose = require("mongoose");

const connectDatabase = () => {
  // mongoose
  //   .connect(process.env.DB)
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database is successfully connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;

