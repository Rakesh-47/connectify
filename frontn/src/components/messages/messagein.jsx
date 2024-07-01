import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import Usersend from "../../hooks/usersendmessage";

const Messagein = () => {
    const [message, setMessage] = useState("");
    const { sendmess, loading } = Usersend();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;

        await sendmess(message);
        setMessage("");
    }

    return (
        <form className="px-4 my-3" onSubmit={handleSubmit}> 
            <div className="w-full relative">
                <input 
                    type="text" 
                    className="border text-lg rounded-lg block w-full p-2.5 border-gray-600 bg-gray-700 text-white" 
                    placeholder="Send a Message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                    disabled={loading}
                >
                    <BiSend />
                </button>
            </div>
        </form>
    );
}

export default Messagein;
