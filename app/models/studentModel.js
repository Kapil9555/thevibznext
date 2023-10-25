import mongoose from "mongoose";
import studentSchema from "../schemas/studentSchema";

const Student = new mongoose.model('Student',studentSchema);



export default Student;