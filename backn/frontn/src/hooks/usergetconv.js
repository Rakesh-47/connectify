import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Usergetconv = () => {
    const [loading, setLoading] = useState(false)
    const [conv, setConv] = useState([])

    useEffect(() => {
        const getConv = async () => {
            setLoading(true)
            try {
                const res = await fetch("api/users")
                const contentType = res.headers.get("content-type")
                if (contentType && contentType.includes("application/json")) {
                    const data = await res.json()
                    if (data.error) {
                        throw new Error(data.error)
                    }
                    setConv(data)
                } else {
                    throw new Error("Received non-JSON response")
                }
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        getConv()
    }, [])

    return { loading, conv }
}

export default Usergetconv
