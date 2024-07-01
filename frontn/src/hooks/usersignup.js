import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authcontext"

const Usersignup=()=>{

    const [loading,setloading]=useState(false)
    const {setauthuser}=useAuthContext()

    const signup1= async ({fullname,username,password,confirmpassword,gender}) =>{

      const ch=check({fullname,username,password,confirmpassword,gender})  
      if(!ch)return

      setloading(true)
      try {
        const res= await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullname,username,password,confirmpassword,gender})
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
    return {loading,signup1}

}

export default Usersignup


function check({fullname,username,password,confirmpassword,gender}){
  
    if(!fullname || !username || !password || !confirmpassword || !gender){
        toast.error("Please fill all the fields")
        return false
    }

    if(password!=confirmpassword){
        toast.error("Password are not equal")
        return false
    }
    if(password.length <6){
        toast.error("Password must be of 6 character")
        return false;
    }
    return true


}