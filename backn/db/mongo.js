import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected successfully");
    } catch (error) {
        console.log("Error during connection", error.message);
    }
};

export default Connection;
