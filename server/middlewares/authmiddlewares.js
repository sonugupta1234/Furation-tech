const JWT=require("jsonwebtoken");
const User=require("../model/usermodel");







//Protected Routes token base
exports.requireSignIn = async (req, res, next) => {
    try {
      const decode = JWT.verify(
        req.headers.Authorization,
        process.env.JWT_SECRET
      );
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
    }
  };

 
  