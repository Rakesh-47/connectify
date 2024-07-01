import React, { useState } from "react";
import {IoSearchSharp} from "react-icons/io5"
import userconv from "../../../global/userconversations";
import Usergetconv from "../../hooks/usergetconv";
import toast from "react-hot-toast";

const Searchbar=()=>{
     
    const [search,setsearch]=useState("")

    const {setSelectedConversation}=userconv()
    const {conv}=Usergetconv()

    const handlesubmit=(e) =>{
        e.preventDefault()
        if(!search)return
        if(search.length<3){
           return  toast.error("Search must be at least 3 character long")
        }

        const conver=conv.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase()))

        if(conver){

            setSelectedConversation(conver)
             setsearch("")

        }else toast.error("User not found")
    }

    return(
    <div>
       <form  onSubmit={handlesubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded:full"
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        
        />
        <button type="submit" className="btn btn-circle bg-violet-900  text-white"  >
        <IoSearchSharp className="w-6 h-6 outline-none" />    
        </button>    
       </form>
    </div>
    )
}

export default Searchbar