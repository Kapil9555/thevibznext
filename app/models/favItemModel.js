import mongoose from "mongoose";
import favItemSchema from "../schemas/favItemSchema";


const Favitem = new mongoose("Favitem",favItemSchema);

export default Favitem