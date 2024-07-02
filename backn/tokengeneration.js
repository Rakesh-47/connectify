import jwt from "jsonwebtoken";

const gencookie = (userid, res) => {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET environment variable is not set.");
        }
        const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
            expiresIn:"15d"
        });


        if (!token) {
            throw new Error("Token generation failed.");
        }

        res.cookie("jwt", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development"
        });

    } catch (error) {
        res.status(500).json({ error: "Error in token generation" })
    }
};

export default gencookie;
