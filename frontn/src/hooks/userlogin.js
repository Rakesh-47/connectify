import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authcontext"

const Userlogin=()=>{

    const [loading,setloading]=useState(false)
    const {setauthuser}=useAuthContext()

    const enter= async (username,password) =>{
  
      setloading(true)
      try {
        const res= await fetch("/api/auth/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,password})
        })

        const data=await res.json()
        if(data.error){
            throw new Error(data.error)
        }

     localStorage.setItem("user-info",JSON.stringify(data))
      setauthuser(data)
      } catch (error) {
        toast.error(error.message)
        
      }
      finally{
        setloading(false)
      }

    }
    return {loading,enter}

}

export default Userlogin


