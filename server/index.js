

const express= require("express");
const cors=require("cors")
const connection  = require("./config/db");
const bookRoute= require("./routes/bookroutes")
const orderRoute=require("./routes/orderroutes")
const userRouter = require("./routes/userroutes");

const app=express();
require("dotenv").config();
app.use(express.json())
app.use(cors())
const port= process.env.PORT



app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/user",userRouter);
app.use("/books",bookRoute)
app.use("/cart",orderRoute)

connection();
app.listen(port,()=>{
    console.log(`port is running at ${port}`)
})