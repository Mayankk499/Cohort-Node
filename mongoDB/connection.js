import mongoose from "mongoose";

export const connectMONGODB = async (MONGODB_URL) => {
  try {
    const connection = await mongoose.connect(MONGODB_URL);
    return connection;
  } catch (error) {
    process.exit(1);
  }
};
