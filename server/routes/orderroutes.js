const express=require("express")

const {newOrder}=require("../controller/ordercontroller")


const orderRoute=express.Router()


orderRoute.post("/new",newOrder)

module.exports=orderRoute
