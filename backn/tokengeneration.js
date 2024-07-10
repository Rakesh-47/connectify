import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()


const gencookie = (userid, res) => {
        const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
            expiresIn:"15d"
        });
        res.cookie("jwt", token, {
            httpOnly: true,
            sameSite: "strict"
        });
};

export default gencookie;
