// import dotenv from "dotenv" 
// import connectDB from "./Configs/database.js";
// import app from "./app.js";
// dotenv.config({
//     path: './.env'
// });

// const startServer = async() =>{
//     try{
//         await connectDB();
//         app.on("error", (error)=>{
//             console.log("ERROR", error)
//         });
//         app.listen(process.env.PORT || 8000, ()=>{
//             console.log(`Server is running on port #${process.env.PORT}`);
//         });
//     }catch(error){
//         console.log("MONGO DB connection failed", error)

//     }
// }

// startServer();



import dotenv from "dotenv";
import connectDB from "./Configs/database.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: '../.env'
});

const server = express();
server.use("/", app);
server.use("/FRONTEND", express.static(path.join(__dirname, "../../FRONTEND")));
server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
});
const startServer = async () => {
    try {
        await connectDB();

        server.on("error", (error) => {
            console.log("ERROR", error);
        });

        const PORT = process.env.PORT || 8000;
        server.listen(PORT, () => {
            console.log(`Server is running on port #${PORT}`);
        });
    } catch (error) {
        console.log("MONGO DB connection failed", error);
    }
};

startServer();
