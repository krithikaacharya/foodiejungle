const mongoose = require("mongoose")
const MongoURI = "mongodb://127.0.0.1:27017/foodiejungle";
const connectToMongo = async () => {
    try {
      await mongoose.connect(MongoURI);
      console.log("Connected to MongoDB successfull!");
    } catch (err) {
      console.log(`Error connecting to MongoDB: ${err}`);
    }
  };
  
  module.exports = connectToMongo;