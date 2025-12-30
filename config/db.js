import mongoose from "mongoose";
const connectDB = async () => {
  console.log("DB function called"); // 👈 ADD THIS

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB error:", error.message);
    process.exit(1);
  }
};
export default connectDB;
