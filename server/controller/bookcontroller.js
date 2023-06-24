const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Book=require("../model/bookmodel")




exports.createBook = catchAsyncErrors(async (req, res) => {
    
    const books = await Book.create(req.body); 
    res.status(201).json({
      success: true,
      books,
    });
  });


  exports.getallBook = catchAsyncErrors(async (req, res) => {
    const value=req.query.title;
    // console.log(value) 
    const books = await Book.find(value===undefined ? {}: { title: { $in: value } });
    // console.log(books)
    res.status(201).json({
      success: true,
      books,
    });
  });


  exports.getBookCountry = catchAsyncErrors(async (req, res) => {
    // console.log(value) 
    const books = await Book.aggregate([ { $match: { country: req.query.country }}]);
    // console.log(books)
    res.status(201).json({
      success: true,
      books,
    });
  });



  

  