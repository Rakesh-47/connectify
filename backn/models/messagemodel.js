import mongoose from "mongoose";

const mess= new mongoose.Schema({
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true

    }
},{timestamps:true})

const Message=mongoose.model("Message",mess)
export default Message