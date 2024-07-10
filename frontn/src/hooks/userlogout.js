import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authcontext"


const uselogo=()=>{

    const [loading,setloading]=useState(false)

    const {setauthuser}=useAuthContext()

    const out=async () =>{
      setloading(true)
      try {
        const res= await fetch("/api/auth/logout",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
        })

        const data=await res.json()
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.removeItem("user-info")
        setauthuser(null)

      } catch (error) {
        toast.error(error.message)
        
      }finally{
        setloading(false)
      }
    }
   return{loading,out}
    }
export default uselogo


