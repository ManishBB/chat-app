import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB ", error.message);
    }
};

export default connectToMongoDB;
