import mongoose from "mongoose";

const fruitSchema = new mongoose.Schema({
    fruitName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    isAvailable:{
        type:Boolean,
        required:false,
        default:false
    },
    quantity:{
        type:Number,
        required:false,
        default:1
    },
    factoryName:{
        type:String,
        required:true
    }

},{timestamps:true});

export default fruitSchema