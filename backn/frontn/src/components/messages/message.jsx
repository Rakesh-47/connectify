import React from "react";
import { useAuthContext } from "../../context/authcontext";
import userconv from "../../../global/userconversations";
import { extractime } from "../../extract";


const Message=({message})=>{

   const {authuser} = useAuthContext()
   const {selectedConversation}=userconv()

   const ch=message.senderid===authuser._id
   const formattime=extractime(message.createdAt)
   const chattheme=ch?'chat-end':'chat-start'
   const profilepic= ch?authuser.profilepic:selectedConversation?.profilepic
   const bubblecol=ch?"bg-blue-500":"bg-gray-700"

   const shakeclass=message.shake?"shake-horizontal":""




    return(
        <div className={`chat ${chattheme}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img  src ={profilepic} alt="none"/>
              </div>
            </div>
        <div className={`chat-bubble text-white bg-blue-500 ${bubblecol} ${shakeclass}`}>{message.message}</div>
        <div className="chat-footer text-xs opacity-50 gap-1 items-center">{formattime}</div>
        </div>
    )
}

export default Message