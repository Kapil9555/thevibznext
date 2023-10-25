import mongoose from "mongoose";
import itemSchema from "../schemas/itemSchema";

const Item = new mongoose.model('Item',itemSchema);

export default Item