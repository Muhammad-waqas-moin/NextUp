const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

console.log("Loaded Environment Variables:", process.env.DATABASE_URL);
const dbUrl = process.env.DATABASE_URL;

const databaseConnection = () => {
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("database connection established");
    })
    .catch((e) => {
      console.log("Database connection error:", e.message);
    });
};
module.exports = databaseConnection;
