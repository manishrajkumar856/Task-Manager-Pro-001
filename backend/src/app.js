import express from "express";
import errorMiddleware from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


// Routes Middleware
app.use('/api/auth', authRouter);


// Error middleware handler
app.use(errorMiddleware);

export default app;