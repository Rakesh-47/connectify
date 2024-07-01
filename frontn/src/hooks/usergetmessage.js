import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import userconv from "../../global/userconversations"

const userget = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = userconv()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const res = await fetch(`api/messages/${selectedConversation._id}`)
                const data = await res.json()

                if (data.error) {
                    throw new Error(data.error)
                }

                setMessages(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        if (selectedConversation && selectedConversation._id) {
            getMessages()
        }
    }, [selectedConversation, setMessages])

    return { messages, loading }
}

export default userget
