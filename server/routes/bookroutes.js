const express=require("express")

const {createBook, getBook, getBookCountry}=require("../controller/bookcontroller")
const {getallBook}=require("../controller/bookcontroller")


const bookRoute=express.Router()


bookRoute.post("/create",createBook)
bookRoute.get("/",getallBook)
bookRoute.get("/country",getBookCountry)


module.exports=bookRoute
