import React from "react"
import userconv from "../../../global/userconversations"
import { useSocketContext } from "../../context/socketcontext"

const Conversation = ({ conversation, idx }) => {
    const selectedConversation = userconv((state) => state.selectedConversation)
    const setSelectedConversation = userconv((state) => state.setSelectedConversation)

    const isSelected = selectedConversation?._id === conversation._id

    const {online}=useSocketContext()

    const isonline=online.includes(conversation._id)

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-300" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isonline? "online":""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilepic} alt="avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between">
                        <p className="font-bold text-orange-400 text-xl">
                            {conversation.fullname}
                        </p>
                    </div>
                </div>
            </div>
            {idx !== 0 && <div className="divider my-0 py-1 h-1" />} 
        </>
    )
}

export default Conversation
