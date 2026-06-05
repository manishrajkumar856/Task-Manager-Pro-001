import { Router } from "express";
import { generateAccessTokenController, getMeController, loginController, registerController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter = Router();


//Define Routes
authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/me', authMiddleware, getMeController);
authRouter.get('/generate-access-token', generateAccessTokenController)


export default authRouter;