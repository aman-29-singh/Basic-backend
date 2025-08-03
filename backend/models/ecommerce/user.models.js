import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        required:true,
        type:String,
        unique:true,
        lowercase:true
    },
    email:{
        required:true,
        type:String,
        unique:true,
        lowercase:true
    },
    password:{
        required:true,
        type:String,
    }
},{timestamps:true});

export const User = mongoose.model('User', userSchema)