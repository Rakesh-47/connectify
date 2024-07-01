import express from "express";
import {login ,logout,signup}  from "./authcontrollers.js"

const router=express.Router()

router.post("/login",login)
router.post("/signup",signup)
router.post("/logout",logout)


export default router