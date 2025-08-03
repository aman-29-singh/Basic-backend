import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    salary:{
        type:String,//rupees mein
        required: true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{// Doctor apna Expereince likhata hai rakhta hai
        type: Number,
        default: 0
    },
    workInHospitals:[
        //as Doctors work in multiple hospital toh Hospital ka toh mein Reference dedunga lekin multiple hai toh array lagega
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
    ]
},{timestamps: true})

export const Doctor = mongoose.model('Doctor', doctorSchema);