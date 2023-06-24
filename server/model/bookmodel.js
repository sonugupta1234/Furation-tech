const mongoose = require("mongoose");

const BookSchema=mongoose.Schema({
    author:{type:String, require:true},
    country:{type:String, require:true},
    imageLink:{type:String, require:true},
    language:{type:String, require:true},
    pages:{type:Number, require:true},
    title: {type:String, require:true},
    year:{type:Number, require:true}
   

})

const Book=mongoose.model("book",BookSchema);

module.exports=Book;
