const mongoose = require("mongoose");
// const { User } = require("../schemas/UserSchema");
// const { Product } = require("../schemas/ProductSchema");


//TODO usar docker para la db


const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    let mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
    });
    console.log(`Connected to ${process.env.DB_NAME}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
