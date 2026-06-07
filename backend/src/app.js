import express from "express";
import errorMiddleware from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


// Routes Middleware
app.use('/api/auth', authRouter);


// Error middleware handler
app.use(errorMiddleware);

export default app;