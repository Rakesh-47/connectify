import User from "./models/models.js"
import bcryptjs from "bcryptjs"
import gencookie from "./tokengeneration.js"


export const signup= async (req,res)=>{
    try {
        const {fullname,username,password,confirmpassword,gender}=req.body
        if(password!=confirmpassword){
            return res.status(400).json({error:"Password does not match"})
        }
        
        const user= await User.findOne({username})

         if(user){
            return res.status(400).json({error:"User already exists"})
         }

    const boypic=`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlpic=`https://avatar.iran.liara.run/public/girl?username=${username}`
    const cover=await bcryptjs.genSalt(10)
    const securepass=await bcryptjs.hash(password,cover)
    const newuser= new User({
        fullname,username,
        password:securepass,
        gender,
        profilepic: gender==="Male"?boypic:girlpic
    })
    
     gencookie(newuser._id,res)
    await newuser.save()
    res.status(200).json({
        _id:newuser.id,
        fullname:newuser.fullname,
        username:newuser.username,
        gender:newuser.gender,
        profilepic:newuser.profilepic
    })

    } catch (error) {
        console.log("error during signup",error)
        
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPassCorrect = await bcryptjs.compare(password, user?.password || "");
        
        if (!user || !isPassCorrect) {
            return res.status(400).json({ error: "Invalid username or password" }); 
        }

        gencookie(user._id, res);
         res.status(201).json({
            _id: user.id,
            fullname: user.fullname,
            username: user.username,
            gender: user.gender,
            profilepic: user.profilepic
        });
    } catch (error) {
        console.log("error during login", error);
        res.status(500).json({ error: "Internal server error" }); 
    }
};


export const logout= async(req,res)=>{
    try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"Logged out sucessfully"})
        
    } catch (error) {
        console.log("error during logout",error)
        res.status(500).json({error:"Internal server error"})
        
    }
}
