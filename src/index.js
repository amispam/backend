import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './db/connection.js'

const app = express();
const port = process.env.PORT || 3000;

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`listening at port ${port}`);
    })
}).catch(err=>{
    console.error("connection failed... ", err);
})

// app.get("/", (req, res)=>{
//     res.send("<h1>your server is alive!</h1>")
// });

// app.listen(port, ()=>{
//     console.log(`listening at port ${port}`)
// });