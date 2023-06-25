const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Orders=require("../model/ordermodel")



exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    // const {  cartItems } = req.body;
    
      console.log(req.body)
  
    const order = await Orders.create(req.body);
  
    res.status(201).send({
      success: true,
      order,
    });

   
  });


  exports.getOrder = catchAsyncErrors(async (req, res, next) => {
    // const {  cartItems } = req.body;
  
    const order = await Orders.find();
  
    res.status(201).send(order);
  });


  exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    // const {  cartItems } = req.body;
    const {id}=req.params
    console.log(id)
    
  
    const order = await Orders.deleteOne({_id: id});
  
    res.status(201).send("Deleted Sucessfully");
  });

  