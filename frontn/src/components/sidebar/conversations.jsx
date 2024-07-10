import React from "react";
import Conversation from "./conversation.jsx";
import Usergetconv from "../../hooks/usergetconv.js";

const Conversations = () => {
    const { loading, conv } = Usergetconv()

    return (
        <div className="flex flex-col overflow-auto">
            {conv.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    idx={idx}
                />
            ))}

            {loading ? <span className="loading loading-spinner"></span> : null} 
        </div>
    )
}

export default Conversations
