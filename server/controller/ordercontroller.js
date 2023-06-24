const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Orders=require("../model/ordermodel")



exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {  cartItems } = req.body;
  
    const order = await Orders.create({
      cartItems,
    });
  
    res.status(201).json({
      success: true,
      order,
    });
  });

  