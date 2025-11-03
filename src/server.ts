// This is your server file :)
import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import pageRouter from './routes/page.routes'

dotenv.config()

const app = express()

app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, "../src/views"))

//midleware
app.use(express.static(path.join(__dirname,'public')))

//Routes
app.use("/", pageRouter)

//fallback
app.use((req:Request, res:Response, nexr:NextFunction)=>{
    res.status(404).send("Page not found")
})

//start server
const PORT = process.env.PORT
if(!PORT){
    throw new Error("Missing port")
}

app.listen(PORT, ()=>{
    console.log(`Serevr is running on http://localhost:${PORT}`)
})