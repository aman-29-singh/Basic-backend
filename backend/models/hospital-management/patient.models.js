import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    /*patient ek tarah se user hii hai but kyunki patient hai isliye aur fields lagenge jaise
    patient ko kya bimari diagnose hua ha iska information rakhna hai,kaunse hospital mein admit hai
    etc toh kafi chize store karni hai */
    name:{
        type: String,
        required: true
    },
    diagonsedWith: {
        type: String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
     age:{
        type:Number,
        required:true
    },
    bloodGroup: {
        type:String,
        required:true//enums[] ka use kar sakte hai agar saare bloodGroup pata hai toh choose karne k liye
    },
    gender:{
        type:String,
        enum: ["M","F","O"],
        required: true
    },
    admittedIn : {
        //kis Hospital mein admit hai toh hospital ka Reference dena padega from Hospital models
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    },
},{timestamps: true})

export const Patient = mongoose.model('Patient', patientSchema);