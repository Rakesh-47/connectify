import { createContext, useContext, useState } from "react";

export const Authcontext= createContext()


export const useAuthContext=()=>{
    return useContext(Authcontext)
}

export const AuthContextProvider=({children})=>{

    const[authuser,setauthuser]=useState(JSON.parse(localStorage.getItem("user-info")) || null)

    return <Authcontext.Provider value={{authuser,setauthuser}}>
        {children}
    </Authcontext.Provider>

}