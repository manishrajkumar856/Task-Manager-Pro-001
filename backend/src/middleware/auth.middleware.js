import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import userModel from '../modals/user.model.js';

export const authMiddleware = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        if(!accessToken){
            return res.status(401).json({
                success: false,
                message: "Unauthorized access."
            });
        }

        const decode = await jwt.verify(accessToken, config.ACCESS_SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                success: true,
                message: "Unauthorized access."
            })
        }

        const user = await userModel.findById(decode.id).select("-password");
        req.user = user;
        next();
        
    } catch (error) {
        next(error);
    }
}
