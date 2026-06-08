import dotenv from 'dotenv';

dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in environment variable");
}

export const config = {
    MONGO_URI : process.env.MONGO_URI,
    ACCESS_SECRET_KEY : process.env.ACCESS_SECRET_KEY,
    REFRESH_SECRET_KEY : process.env.REFRESH_SECRET_KEY,
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET
}