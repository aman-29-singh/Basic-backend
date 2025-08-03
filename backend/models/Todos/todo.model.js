import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,//ye special type hai jaise Boolean,String etc so ye type k baad Reference dena padta hai
        ref: 'User'//ye user.model.js ka User model hai i.e user model ka Reference hai
    },
    subTodos: [ //This is an array of Sub-Todos
            {
                //har ek object ka structure batayenge ki array k andar har ek object iss tarah dikhega
                //but ye wale object thoda sa alag hai iske andar doosre model ka Refernce aayega
                type:mongoose.Schema.Types.ObjectId,
                ref:'SubTodo'//ye sub_todo.model.js se laye hai hum Reference i.e SubTodo
            }
        ] 
},{timeseries: true})

export const Todo = mongoose.model('Todo','todoSchema');