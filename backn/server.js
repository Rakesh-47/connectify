import express, { application } from "express";
import dotenv from "dotenv"
import authRoutes from "./authroute.js"
import Connection from "./db/mongo.js"
import cookieParser from "cookie-parser";
import messageroute from "./messageroute.js"
import userroutes from "./userroutes.js"

const app=express();
dotenv.config()
const PORT=process.env.PORT



 
app.get("/",(req,res)=>{
    res.send("Hello World 1")
})
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageroute)
app.use("/api/users",userroutes)

app.listen(PORT,()=>{
    Connection()
    console.log(`server running ${PORT}`)}
 )
