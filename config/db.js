import mongoose from "mongoose";
import { mongoURL } from "../utils/envVariables.js";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      dbName: "crud-app",
    });

    console.log("mongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
