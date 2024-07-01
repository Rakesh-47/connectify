import React, { useEffect, useRef } from "react";
import Message from "./message.jsx";
import userget from "../../hooks/usergetmessage.js";
import Mgskeleton from "../skeletons/mgskeleton.jsx";

const Messages = () => {
    const { messages, loading } = userget();
    const lastmsg = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastmsg.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);

    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading && messages.length > 0 && messages.map((message, index) => (
                <div key={message._id} ref={lastmsg}>
                    <Message message={message} />
                </div>
            ))}

            {loading && [...Array(3)].map((_, idx) => <Mgskeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className="text-center font-sans font-semibold">Send a message to start a conversation</p>
            )}
        </div>
    );
}

export default Messages;
