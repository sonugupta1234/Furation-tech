const mongoose = require("mongoose");




const orderSchema=new mongoose.Schema({


        author:{type:String, require:true},
        country:{type:String, require:true},
        imageLink:{type:String, require:true},
        language:{type:String, require:true},
        pages:{type:Number, require:true},
        title:{type:String, require:true},
        year:{type:Number, require:true},
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "user",
            required: true,
          }
        
    
   

})

const Orders=mongoose.model("Order",orderSchema);

module.exports=Orders;
