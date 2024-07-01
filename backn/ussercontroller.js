import User from "../models/models.js"

export const Getuser = async (req, res) => {
    try {
        const loggedin = req.user._id.toString()
        const alluser = await User.find({ _id: { $ne: loggedin } }).select("-password")
        res.status(200).json(alluser)
    } catch (error) {
        console.log("Error in getting user", error)
        res.status(500).json({ error: "Error in getting user" }) 
    }
}
