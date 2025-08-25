
import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect(process.env.MONGOURL).then(()=>{
        console.log('Database Connected')
    })
}