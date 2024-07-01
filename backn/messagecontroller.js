import Conversation from "../models/conversation.js"
import Message from "../models/messagemodel.js"

export const sendmessage=async(req,res)=>{
    try {
        const {message}=req.body
        const {id:receiverid}=req.params
        const senderid=req.user._id

    let conv= await Conversation.findOne({
        participants:{$all:[senderid,receiverid]}
    })

   if(!conv){
   conv= await Conversation.create({
        participants:[senderid,receiverid]
    })

    const newmessage= new Message({
        senderid,receiverid,message
    })
    if(newmessage){
        conv.messages.push(newmessage._id)
    }
     

    await Promise.all([conv.save(),newmessage.save()])

    res.status(201).json(newmessage)
   }
    } catch (error) {
        console.log("error in sending message ",error)
    }
}

export const getmessage=async (req,res)=>{
    try {

        const {id:chattinguser}=req.params
        const senderid=req.user._id.toString()

        const conv= await Conversation.findOne({
            participants:{ $all :[senderid,chattinguser]}
        }).populate("messages")

     console.log(conv)
        

      if(!conv) return res.status(201).json([])

      const messagebtw=conv.messages

      res.status(200).json(messagebtw)
        
    } catch (error) {
        console.log("error in getting message ",error)
        
    }
}