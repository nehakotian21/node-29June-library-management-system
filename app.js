import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import genreRouter from "./routers/genre.router"
import userRouter from "./routers/user.router"

// .env file configuration
dotenv.config()

const port = process.env.PORT || 8080
// console.log(port, typeof(port))


// Starting node js server
const app = express()
app.listen(port, ()=>{
    console.log(`🎉 Server running on port ${port}.`)
})

app.use(express.json())

// Testing http://localhost:{port}/
app.get("/api/v1", (req, res)=>{
    return res.status(200).json({
        message : "Node JS Project Running.",
        success: true
    })
})

// Connecting to Mongo DB using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/node-29june')
.then(res =>{
    console.log("🎉 Mongo DB connected successfully!")
})
.catch(err =>{
    console.log("❌ Connection to Mongo DB Failed!")
    console.log(err)
})

// base router set as http://localhost:8000/api/v1/genre in genreRouter
app.use("/api/v1/user", userRouter)
app.use("/api/v1/genre", genreRouter)