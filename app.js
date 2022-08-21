import express from "express";
import router from "./routes/router";
import connectDB from "./database-connection/connection"
import "dotenv/config"


const app = express();

app.use("/api",router)



const start = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`BACKEND SERVER ON @ http://localhost:${process.env.PORT}/api/user`);
        });
    } catch (error) {
        console.log(error);
        console.log("Failed to connect to the database, server is not running.");
    }
};
  
start();


