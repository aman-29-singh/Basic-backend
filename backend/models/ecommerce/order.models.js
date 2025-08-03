import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({//it is a mini model which is used by orderItems toh ye arrray hai
    //har ek product ka ek unique Id generate hota hai hum ye Id generate nhi karte mongodb apne aap _id se karta hai
    // _id se Reference karte hai uss product k id ko toh uss product ka sirf id rakh lo taki uss id k basis par mein uss product ko find karlunga
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"//product.model.js i.e productId toh model se mil jayegi
    },
    quantity:{
        type:Number,
        required:true
    }

})



const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItems:{
        type:[orderItemSchema]//this is an array of orderItemSchema upar hai
        /*aise bhi kar sakte hai
         * type:[
         * {
         *   productId;{},\
         *   quantity: {}   aise bhi kar sakte hai
         * }
         * ]
         */
    },
    address:{
        type:String,
        required: true
    },
    status:{
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
        /*Toh abb jab bhi ye order create hoga n toh hum ye enum:[] mein se hii choose kar sakte hai
        agar ye enum[] k alawa kuch bhi spealing mistake hui toh uss status k andar woh value jayegi hii nhi */
    }
},{timestamps:true});

export const Order = mongoose.model('Order', orderSchema);