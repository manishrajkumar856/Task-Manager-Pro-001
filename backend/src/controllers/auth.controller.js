import userModel from "../modals/user.model.js";
import { generateAccessTokenService, googleCallbackService, loginService, registerService } from "../services/auth.service.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.js";

export const registerController = async (req, res, next) => {
    try {
        const { accessToken, refreshToken, user } = await registerService(req.body);

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            sameSite: true,
            secure: false,
            maxAge: 15 * 60 * 1000,
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: true,
            secure: false,
            maxAge: 15 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({
            success: true,
            message: "User register successfully.",
            user,
        })
    } catch (error) {
        next(error);
    }
}

export const loginController = async (req, res, next) => {
    try {
        const { refreshToken, accessToken, user } = await loginService(req.body);

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            sameSite: true,
            secure: false,
            maxAge: 15 * 60 * 1000,
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: true,
            secure: false,
            maxAge: 15 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({
            success: true,
            message: "User loggedin successfully.",
            user,
        });
    } catch (error) {
        next(error);
    }
}

export const getMeController = async (req, res, next) => {
    const user = req.user;

    return res.status(200).json({
        success: true,
        message: "Currently logged in user.",
        user
    })


}

export const generateAccessTokenController = async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;

    try {
        const accessToken = await generateAccessTokenService(refreshToken);

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            sameSite: true,
            secure: false,
            maxAge: 10 * 60 * 1000,
        });


        return res.status(200).json({
            success: true,
            message: "Access token generated."
        });

    } catch (error) {
        next(error);
    }
}

export const googleCallbackController = async (req, res, next) => {
    const { accessToken, refreshToken, user } = await googleCallbackService(req.user);

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: true,
        secure: false,
        maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: true,
        secure: false,
        maxAge: 15 * 24 * 60 * 60 * 1000,
    });


    res.redirect('http://localhost:5173/home');
}