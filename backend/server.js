import app from "./src/app.js";
import 'dotenv/config';
import connectDB from "./src/config/db.js";


const startServer = async () => {
    //DB connection
    await connectDB();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

startServer();