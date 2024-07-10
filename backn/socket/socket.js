import { Server } from "socket.io";
import http, { createServer } from "http"
import express from "express"


const app=express();

const server=http.createServer(app)
const io= new Server(server,{
    cors:{
        origin:["http://localhost:3000","https://connectify-dun.vercel.app"],
        methods:["GET","POST"],
        credentials:true
    }
})


const usersocket={}

 export const getsocketid=(receiverid)=>{
     return usersocket[receiverid]
}



io.on("connection",(socket)=>{
    const userid=socket.handshake.query.userid
if(userid!="undefined"){
    usersocket[userid]=socket.id
}

io.emit("getonline",Object.keys(usersocket))


    socket.on("disconnect",()=>{

        delete usersocket[userid]
        io.emit("getonline",Object.keys(usersocket))

    })
})

export {app,io,server}