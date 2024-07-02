import React from "react";
import {BiLogOut} from "react-icons/bi"
import uselogo from "../../hooks/userlogout";

const Logout=()=>{
   
    const {loading,out}=uselogo()
    return(
        <div className="mt-auto py-2">
        {!loading?(<BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={out}/> ) :(
            <span className="loading loading-spinner"></span>

        )}
        </div>
    )
}

export default Logout