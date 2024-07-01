import express from "express";
import protect from "./middlelayer/protect.js";
import  {sendmessage,getmessage}  from "./messagecontroller.js";

const router=express.Router()

router.post("/send/:id",protect,sendmessage)
router.get("/:id",protect,getmessage)

export default router