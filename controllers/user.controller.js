import User from "../models/user.model";
import bcrypt from "bcrypt";

// Create User / Sign up
// Get data from the user ✅
// password encrypt - bcyrpt ✅
// generate OTP - 6 digit
// send verification otp to email - nodemailer 
// OTP -> hash ---> hashOTP along with email -> in OTP collection / model
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
    // send email
    // hash otp
    // save in otp model

    // save the data in user model



    return res.status(201).json({
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
// Fetch single user ✅ no password
// Fetch all user ✅ no password
// Update user (excluding password)
// Delete user
// Login
// Forget Password
// Send OTP
// Verify OTP
// Change Password
// Resend OTP - 3 times
