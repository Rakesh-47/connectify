import { useEffect } from "react"
import userconv from "../../global/userconversations"
import { useSocketContext } from "../context/socketcontext"
import sound1 from    "../assets/sound.wav"

const uselisten=()=>{

    const {socket}=useSocketContext()
    const {messages,setMessages}=userconv()

    useEffect(()=>{

        socket?.on("newmessage",(newmessage)=>{
            newmessage.shake=true;
            const notifi= new Audio(sound1)
            notifi.play()
            setMessages([...messages,newmessage])
        })

    return ()=>socket?.off("newmessage")

    },[socket,messages,setMessages])

}

export default uselisten