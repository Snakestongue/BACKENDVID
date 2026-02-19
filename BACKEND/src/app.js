import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import userRouter from "./Routes/user.route.js";
// const app = express(); // create express app
// app.use(express.json());

// import userRouter from "./Routes/user.route.js"

// app.use("/api/v1/users", userRouter);
// export default app;

//http://localhost:4000/api/v1/users/register
const app = express();
app.use(express.json());
app.use("/api/v1/users", userRouter);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendPath = path.join(__dirname, "../../FRONTEND");
app.use(express.static(frontendPath));

app.get('*splat', (req, res) => {
  //res.sendFile(path.join(__dirname, "../index.html"));
  res.sendFile(path.join(__dirname, "../../index.html"));
});

export default app;