import express, { application } from "express";
import dotenv from "dotenv"
import path from "path"
import authRoutes from "./authroute.js"
import Connection from "./db/mongo.js"
import cookieParser from "cookie-parser";
import messageroute from "./messageroute.js"
import userroutes from "./userroutes.js"
import { app, server } from "./socket/socket.js";

dotenv.config()
const PORT=process.env.PORT


const __dir=path.resolve()
 

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageroute)
app.use("/api/users",userroutes)

app.use(express.static(path.join(__dir,"/front/dist")))


app.get("*",(req,res)=>{
    res.sendFile(path.join(__dir,"frontn","dist","index.html"))
})

server.listen(PORT,()=>{
    Connection()
    console.log(`server running ${PORT}`)}
 )
