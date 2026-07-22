import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
    },
    username :{
        type: String,
        required: true,
        unique: true
    },
    password :{
        type: String,
        required: true
    },
    role :{
        type: String,
        enum : ['user', 'admin'],
        default: 'user'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Number,
        default: 0
    }
})

const User = mongoose.model('user', userSchema);
export default User;