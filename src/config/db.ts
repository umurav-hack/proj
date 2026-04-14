import mongoose from 'mongoose';
import 'dotenv/config'; 

const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI || "";

    if (!uri) {
      console.error("❌ Error: MONGO_URI is missing in .env");
      process.exit(1);
    }

    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;