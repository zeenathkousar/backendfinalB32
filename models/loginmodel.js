import mongoose from "mongoose";

const loginSchema=mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }

})

let loginModel=mongoose.model('Login',loginSchema);

export default loginModel