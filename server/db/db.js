// Database connection code with mongodb

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(" MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1); // Exit process with failure
    }
};

export default connectToDatabase;
