import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.NODE_ENV) return console.log("mongodb is not available");

  console.log("mongodb is available. Connected to database");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
};
