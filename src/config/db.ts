import mongoose from "mongoose";
import { serverConfig } from ".";

export async function connectDB() {
    try {
        await mongoose.connect(serverConfig.DB_URI)
        console.log("Connected to DB successfully");
    } catch (error) {
        console.log("Error connecting to DB ERROR: ", error);
    }
}
