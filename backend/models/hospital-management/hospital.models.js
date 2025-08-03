import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    addressLine1:{
        type: String,
        required: true,
    },
    addressLine2:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    pincode:{
        type: String,
        required: true,
    },
    specializedIn:[//hospital kisi mein specialized bhi hote hai toh array hai and array k andar object hai
        {
            type: String
        }
    ]
},    {timestamps: true})

export const Hospital = mongoose.model('Hospital', hospitalSchema);