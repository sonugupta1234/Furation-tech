const mongoose = require("mongoose");

const orderSchema=mongoose.Schema({

    cartItems: [{
    author:{type:String, require:true},
    country:{type:String, require:true},
    imageLink:{type:String, require:true},
    language:{type:String, require:true},
    pages:{type:Number, require:true},
    title:{type:String, require:true},
    year:{type:Number, require:true}
    },
    ],
   

})

const Orders=mongoose.model("Order",orderSchema);

module.exports=Orders;
