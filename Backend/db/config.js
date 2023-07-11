const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongo_uri = process.env.REACT_APP_MONGO_URI;
require("dotenv").config();
const ConnectDb = async () => {
  try {
    const connect = await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = ConnectDb;
