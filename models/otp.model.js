import mongoose from "mongoose";


const otpSchema = new mongoose.Schema({
    email : {
        type: String,
        required : true
    },
    otp: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires : "5m"
    }
})

const Otp = mongoose.model('otp', otpSchema)
export default Otp