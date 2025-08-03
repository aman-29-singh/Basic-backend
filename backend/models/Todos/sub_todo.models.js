import mongoose from 'mongoose';

// const subTodoSchema = new mongoose.Schema({},{timestamps: true})
//here mongoose.Schema is a method which expect two parameters i.e an object {}ismein fields honge data k and timestamps 

const SubTodoSchema = new mongoose.Schema(
    {
        content : {
            type: String,
            required: true,
        },
        complete: {
            type : Boolean,
            default: false
        },
        createdBy: {
            //isse track karenge ki ye Todos kis User ne banaya hai
            /*yahan par humein kis user ne todo banaya hai woh batana hai toh iska relation hona chaiye humare user.model,js k 
            k saath mein toh jab humne koi aisa user.model.js ka model bana rakha hai aur ye model ka relation humein user model
            k saath chaiye toh humein 2 chizo ka dhyan rakhna hai ek ki special hai ye aur doosra Reference i.e Reference 
            ka matlab hai ki user.MODEL ka Reference de rahe ho ya SubTodo model ka Reference de rahe ho ye batana padega
            toh humlog likhenge yeh i.e type: mongoose.Schema.Types.ObjectId iska matlab hai ki abb aap muje koi n koi Reference dene
            wale ho ya toh user.model ka ya phir subTodo.model ka ya kisi n kisi model ka Reference dene wale ho */
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"//this is Reference of user.model.js aur yeh User model ka name hai
        }
        
    },{timestamps: true})

export const SubTodo = mongoose.model('SubTodo', SubTodoSchema);    