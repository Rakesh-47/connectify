import React, { useState } from "react";
import Gendercheck from "./gendercheck.jsx";
import { Link } from 'react-router-dom';
import Usersignup from "../hooks/usersignup.js";

const Signup =()=>{

   const [inputs,setinputs]=useState({
      fullname:"",
      username:"",
      password:"",
      confirmpassword:"",
      gender:""
     
   })

   const onCheck=(gender)=>{
      setinputs({...inputs,gender})
   }

   const {loading ,signup1}=Usersignup()

   const handlesub= async (e)=>{
     e.preventDefault()
     await signup1(inputs)

   }

    return(
        <div>
           <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="mb-4 text-2xl  font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Signup Connectify</span>
        </h1>
        <form onSubmit={handlesub}>
            
            <div>
                <label className="label p-2">
                     <span className="text-base label-text text-bold text-black">FullName</span>
                </label>
                <input type="text" placeholder="John Doe"className="input input-bordered input-info w-full max-w-xs" value={inputs.fullname}
                 onChange={(e)=>setinputs({...inputs,fullname:e.target.value})}
                />
            </div>

            <div>
                <label className="label p-2">
                     <span className="text-base label-text text-bold text-black">Username</span>
                </label>
                <input type="text" placeholder="Username"className="input input-bordered input-info w-full max-w-xs"
                value={inputs.username} onChange={(e)=>setinputs({...inputs,username:e.target.value})}
                />
            </div>
            
            <div>
                <label className="label p-2">
                     <span className="text-base label-text text-bold text-black">Password</span>
                </label>
                <input type="password" placeholder="Enter Password"className="input input-bordered input-info w-full max-w-xs" 
                value={inputs.password} onChange={(e)=>setinputs({...inputs,password:e.target.value})}
                />
            </div>

            <div>
                <label className="label p-2">
                     <span className="text-base label-text text-bold text-black">Confirm Password</span>
                </label>
                <input type="password" placeholder="Enter Password"className="input input-bordered input-info w-full max-w-xs" 
                value={inputs.confirmpassword} onChange={(e)=>setinputs({...inputs,confirmpassword:e.target.value})}
                />
            </div>

            <Gendercheck onCheckboxChange={onCheck} selectgen={inputs.gender}/>
 
            <Link to={"/login"} className='text-sm text-black hover:underline hover:text-blue-600 mt-2 inline-block'>
                   Already have an account?
            </Link>

            <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700 py-2"
            disabled={loading}
            >{loading?<span className="loading loading-spinner"></span>:"Sign Up"}</button>
            </div> 
        </form>
      </div>
    </div>
        </div>
    )
}

export default Signup