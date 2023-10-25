import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    itemName:{
        type:String,
        required:true,
        trim:true
    },

    mrp:{
        type:Number,
        required:true,
        
    },

    srp:{
        type:Number,
        required:true,
    },

    isActive:{
        type:Boolean,
        required:false,
        default:false
    },

    description:{
        type:String,
        required:true,
        trim:true
    },
    isPopular:{
        type:Boolean,
        required:false,
        default:false
    }
},{timestamps:true})

export default itemSchema;