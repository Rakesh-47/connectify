import jwt from 'jsonwebtoken';
import User from '../../models/models.js';
import dotenv from 'dotenv';

dotenv.config();

const protect = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized Token' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }

        const user = await User.findById(decoded.userid).select('-password');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;

        next(); 

    } catch (error) {
        console.error('Error in protection:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export default protect;
