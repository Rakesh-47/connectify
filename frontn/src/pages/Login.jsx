import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import Userlogin from "../hooks/userlogin.js";

const Login = () => {

 const [username,setusername]=useState("")
 const [password,setpassword]=useState("")


 const {loading ,enter}=Userlogin()

const handle = async (e)=>{
  e.preventDefault()
  await enter(username,password)
}

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="mb-4 text-2xl  font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Login Connectify</span>
        </h1>
        <form onSubmit={handle}>
            <div>
                <label className="label p-2">
                     <span className="text-base label-text text-bold text-black">Username</span>
                </label>
                <input type="text" placeholder="Username"className="input input-bordered input-info w-full max-w-xs"
                 value={username}
                 onChange={(e)=>setusername(e.target.value)}
                />
            </div>
            
            <div>
                <label className="label p-2">
                     <span className="text-base label-text text-bold text-black">Password</span>
                </label>
                <input type="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                />
            </div>

            <Link to={"/signup"} className='text-sm text-black hover:underline hover:text-blue-600 mt-2 inline-block'>
        {"Don't"} have an account?
        </Link>

        <button className="btn btn-block btn-sm mt-2 border border-slate-700 py-2"
            disabled={loading}
            >{loading?<span className="loading loading-spinner"></span>:"Login"}</button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
