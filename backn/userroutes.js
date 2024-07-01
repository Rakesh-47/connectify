import express from "express";
import protect from "./middlelayer/protect.js";
import { Getuser } from "./ussercontroller.js";

const router=express.Router()

router.get("/",protect,Getuser)

export default router