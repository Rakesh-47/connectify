import jwt from "jsonwebtoken";

const gencookie=(userid,res)=>{
   const token=jwt.sign({userid},process.env.JWT_SECRET,{
    expiresIn:'15d'
   })

   res.cookie("jwt",token,{
     httpOnly:true,
     samesite:"strict"
   })
}
export default gencookie