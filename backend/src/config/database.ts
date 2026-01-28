import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("MongoDb connected");
    } catch (error){
        console.error("MongoDb connection error:", error);
        process.exit(1);
    }
}