import mongoose from "mongoose";
import fruitSchema from "../schemas/fruitSchema";

const Fruit = new mongoose.model('Fruit',fruitSchema)



export default Fruit