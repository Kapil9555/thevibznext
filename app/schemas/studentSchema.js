import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    class:{
        type:Number,
        required:true,
    },
    section:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gurdianName:{
        type:String,
        required:true
    }

});
export default studentSchema;