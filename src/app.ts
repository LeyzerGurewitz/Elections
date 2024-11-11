import express, { Request, Response } from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import connectDB from './config/db'
import Candidate from "./models/Candidate";
import userRoute from './routes/userRoute'
import votersRoute from './routes/votersRoute'
dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.use(express.json());
connectDB();

app.use('/api', userRoute)
app.use('/api', votersRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
export default app;

