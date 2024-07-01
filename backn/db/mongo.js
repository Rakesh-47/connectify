import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://rakvc456:n1LRRYXeqSubqVr@cluster0.k7h8o3s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected successfully");
    } catch (error) {
        console.log("Error during connection", error.message);
    }
};

export default Connection;
