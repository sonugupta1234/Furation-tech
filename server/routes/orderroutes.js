const express=require("express")

const {newOrder, getOrder, deleteOrder}=require("../controller/ordercontroller")
const { requireSignIn } = require("../middlewares/authmiddlewares")


const orderRoute=express.Router()


orderRoute.post("/new",newOrder)
orderRoute.get("/get",getOrder)
orderRoute.delete("/:id",requireSignIn,deleteOrder)

module.exports=orderRoute
