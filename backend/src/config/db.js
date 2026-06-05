import mongoose from "mongoose";
import dns from 'dns';
import { config } from './config.js';

const connectDB = async () => {
    // Set DNS server
    dns.setServers(["1.1.1.1", "1.0.0.1"]);

    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Database connected successfully....");
    } catch (error) {
        throw new Error("Errow while connecting Database!: "+error);
    }
}

export default connectDB;