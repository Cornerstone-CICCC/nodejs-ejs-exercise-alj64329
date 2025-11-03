import express, {Router,Request,Response} from 'express'

const pageRouter = Router()

pageRouter.get("/",(req:Request, res:Response)=>{
    res.status(200).render("index",{pageTitle:'Home'})
})
pageRouter.get("/about",(req:Request, res:Response)=>{
    res.status(200).render("about",{pageTitle:'About'})
})
pageRouter.get("/contact",(req:Request, res:Response)=>{
    res.status(200).render("contact",{pageTitle:"Contact"})
})

export default pageRouter