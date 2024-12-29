import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
// dotenv.config();
// console.log("hhftgyyui",process.env.DATABASE
// )
const connectDB = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect("mongodb+srv://adityaprakash280102:1m9MtpMfrvdhxO13@cluster0.qarlp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (err) {
    console.error("err");
    console.error(`Failed to connect to MongoDB: ${err.message}`);
    console.log("kuygkuygu");
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
