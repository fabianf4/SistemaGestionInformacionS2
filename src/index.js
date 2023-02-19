import dotenv from "dotenv"

import express from "express"
import morgan from "morgan"
import userRouter from "./routers/userRouter.js"
import baptismRouter from "./routers/baptismRouter.js"

const app = express()

//use dotenv to read .env file
dotenv.config()

//use express.json() to parse json data
app.use(morgan("dev"))
app.use(express.json())

//port
const PORT = process.env.PORT || 3001

//routes
app.use("/user", userRouter)
app.use("/baptism", baptismRouter)

app.get("/api-healt", (req, res) => {
    res.status(200).send("API is running")
})

app.listen(PORT, () => {
    console.log("Server is running on port "+PORT)
})
