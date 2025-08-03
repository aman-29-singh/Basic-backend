import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true
        },
        email : {
            type: String,
            unique: true,
            required: true
        },
        password : {
            type: String,
            unique:true,
            required: true
        }
    },  { timestamps: true }
)


export const User = mongoose.model('User', userSchema);
//this const User will convert into plural and lowercase in mongodb i.e users
//we have to declare this const User because this User will use in different file