import User from "../models/user.model";
import bcrypt from "bcrypt";
import genrateOTP from "../service/otp.service";
import sendEmail from "../service/email.service";
import Otp from "../models/otp.model";

// Create User / Sign up
// Get data from the user ✅
// password encrypt - bcyrpt ✅
// generate OTP - 6 digit ✅
// send verification otp to email - nodemailer ✅
// OTP -> hash ---> hashOTP along with email -> in OTP collection / model ✅
// Save data in database ✅
// Send user 201 created message ✅
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, password, username, role, email } = req.body;

    // Check if the user already exits or not
    const existingUsername = await User.find({ username });
    if (existingUsername.length > 0) {
      return res.status(409).json({
        message: "Username already used",
        success: false,
      });
    }

    const existingEmail = await User.find({ email });
    if (existingEmail.length > 0) {
      return res.status(409).json({
        message: "Email already used",
        success: false,
      });
    }

    // Hashing the user password
    // console.log(password);
    const hashPassword = bcrypt.hashSync(
      password,
      Number(process.env.PASSWORD_SALT),
    );

    // generate otp
    const otp = genrateOTP()

    // send email
    await sendEmail({
      to: email,
      subject: "Email verification OTP",
      text: `OTP for Library Managemant System is ${otp}`
    })
    console.log("Email sent successfully")


    // hash otp
    const hashOTP = bcrypt.hashSync(String(otp),Number(process.env.OTP_SALT) )

    // save in otp model
    const creatingOTP = await Otp.create({email, otp: hashOTP})
    console.log("OTP saved successfully")


    // save the data in user model
    const createUser = await User.create({
      firstName,
      lastName,
      username,
      password: hashPassword,
      role,
      email
    })
    console.log("User created successfully")

    return res.status(201).json({
      user: createUser,
      message: "User created successfully.",
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong while trying to create a new user.",
      success: false,
    });
  }
};

// Verify email 
// Get data from the user - email , otp ✅
// fetch otp data from otp collection ✅
// OUTPUT 1: data not found --> err message ✅
// OUTPUT 2: data found ✅
// Compare
// OUTPUT 1: OTP Matched --> success --> User status to 1 in User collection and delete OTP from OTP collection
// OUTPUT 2: OTP not Matched --> OTP verification failed message ✅
export const verifyEmail = async(req, res) =>{
  try{
    const {email, otp} = req.body;
    console.log("--------------------------------------------")
    console.log("USER INPUT")
    console.log(email, otp)

    const existingOTP = await Otp.findOne({email})
    if(!existingOTP){
      return res.status(404).json({
        message: "Generate new OTP",
        success: false
      })
    }

    console.log("--------------------------------------------")
    console.log("DB FETCH")
    console.log(existingOTP)


    const comparing = bcrypt.compareSync(otp, existingOTP.otp)
    console.log(comparing)

    if(!comparing){
      return res.status(400).json({
        message: "OTP does not match.",
        success: false
      })
    }


    const updateUser = await User.updateOne({email}, {status: 1})
    console.log(updateUser)

    // Deleting OTP data from OTP collection


    return res.status(200).json({
      message: "OTP verification complete.",
      success: true
    })



  }catch(err){
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong while trying to verify Email.",
      success: false,
    });
  }
}



// Fetch single user ✅ no password
// Fetch all user ✅ no password
// Update user (excluding password, email, username) ✅
// Delete user 
// Login ✅
// Forget Password ✅
// Verify OTP ✅
// Change Password 
