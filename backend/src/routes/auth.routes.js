import { Router } from "express";
import { generateAccessTokenController, getMeController, googleCallbackController, loginController, registerController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import passport from "passport";

const authRouter = Router();


//Define Routes
authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/me', authMiddleware, getMeController);
authRouter.get('/generate-access-token', generateAccessTokenController);
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email' ]}));
authRouter.get('/google/callback', passport.authenticate('google', {session: false, failureRedirect: '/login'}), googleCallbackController)


export default authRouter;