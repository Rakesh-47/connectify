import mongoose from "mongoose";

const convers= new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    messages:[
        {
             
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[]
        }
    ]
})

const Conversation=mongoose.model("Conversation",convers)

export default Conversation