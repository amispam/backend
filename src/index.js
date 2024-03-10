import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './db/connection'

const app = express();
const port = process.env.PORT || 3000;

connectDB();

// app.get("/", (req, res)=>{
//     res.send("<h1>your server is alive!</h1>")
// });

// app.listen(port, ()=>{
//     console.log(`listening at port ${port}`)
// });