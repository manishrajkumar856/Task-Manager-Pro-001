import express from "express";
import errorMiddleware from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import passport from 'passport';
import { Strategy as GoogleStrategy} from 'passport-google-oauth20';
import { config } from "./config/config.js";

const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// Google Auth
app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
} ));


// Routes Middleware
app.use('/api/auth', authRouter);


// Error middleware handler
app.use(errorMiddleware);

export default app;