import { useState } from "react";
import userconv from "../../global/userconversations";
import toast from "react-hot-toast";

const Usersend = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = userconv();

    const sendmess = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            console.log(data);

            // Assuming `data` is the new message, append it to the messages
            setMessages([...messages, data]);

        } catch (error) {
            toast.error(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return { sendmess, loading };
};

export default Usersend;
