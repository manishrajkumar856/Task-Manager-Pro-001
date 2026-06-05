import { config } from "../config/config.js";
import userModel from "../modals/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.js";
import jwt from 'jsonwebtoken';


export const registerService = async (data) => {
    const { name, email, password } = data;

    try {
        const isAlreadyExist = await userModel.findOne({ email });

        if (isAlreadyExist) {
            const err = new Error("User already exist.");
            err.statusCode = 409;
            throw err;
        }

        const user = await userModel.create({
            name,
            email,
            password
        });

        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        user.refreshToken = refreshToken;
        await user.save();

        return {
            accessToken,
            refreshToken,
            user
        }
    } catch (error) {
        throw error;
    }
}

export const loginService = async (data) => {
    const { email, password } = data;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            const err = new Error("Invalid Credentials.");
            err.statusCode = 401;
            throw err;
        }

        const isMatched = await user.comparePassword(password);

        if (!isMatched) {
            const err = new Error("Invalid Credentials.");
            err.statusCode = 401;
            throw err;
        }

        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        user.refreshToken = refreshToken;
        await user.save();

        return {
            accessToken,
            refreshToken,
            user
        }
    } catch (error) {
        throw error;
    }
}

export const generateAccessTokenService = async (refreshToken) => {

    if (!refreshToken) {
        const err = new Error("Unauthorized access");
        err.statusCode = 401;

        throw err;
    }
    try {
        const decode = jwt.verify(refreshToken, config.REFRESH_SECRET_KEY);

        if (!decode) {
            const err = new Error("Unauthorized access");
            err.statusCode = 401;

            throw err;
        }

        const user = await userModel.findById(decode.id);

        if (refreshToken !== user.refreshToken) {
            const err = new Error("Unauthorized access");
            err.statusCode = 401;

            throw err;
        }

        const accessToken = generateAccessToken(user._id);
        return accessToken;
        
    } catch (error) {
        const err = new Error("Unauthorized access");
        err.statusCode = 500;

        throw err;
    }
}