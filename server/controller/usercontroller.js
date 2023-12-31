const { hashPassword, comparePassword } = require("../helpers/authhelpers");
const JWT=require("jsonwebtoken");

const User=require("../model/usermodel");

 

// {===========================Registration==============================}
exports.registerUser=async(req,res)=>{
      try{
        const { name, email, password, gender, number } = req.body;
        //validations
        if (!name) {
          return res.send({ error: "Name is Required" });
        }
        if (!email) {
          return res.send({ message: "Email is Required" });
        }
        if (!password) {
          return res.send({ message: "Password is Required" });
        }
        if (!gender) {
          return res.send({ message: "gender no is Required" });
        }
        if (!number) {
          return res.send({ message: "mobile no. is Required" });
        }
        
        //check user
        const exisitingUser = await User.findOne({ email });
        //exisiting user
        if (exisitingUser) {
          return res.status(200).send({
            success: false,
            message: "Already Register please login",
          });
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await User.create({
          name,
          email,
          gender,
          number,
          password: hashedPassword,
        });
    
        res.status(201).send({
          success: true,
          message: "User Register Successfully",
          user,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Errro in Registeration",
          error,
        });
      }
      
}

// {===========================login==============================}
exports.loginUser=async(req,res)=>{
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
          return res.status(404).send({
            success: false,
            message: "Invalid email or password",
          });
        }
        //check user
        const user = await User.findOne({ email });

        if (!user) {
          return res.status(404).send({
            success: false,
            message: "Email is not registerd",
          });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
          return res.status(200).send({
            success: false,
            message: "Invalid Password",
          });
        }
        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        res.status(200).send({
          success: true,
          message: "login successfully",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            gender: user.gender,
           number:user.number,
            role: user.role,
          },
          token,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in login",
          error,
        });
      }
}





