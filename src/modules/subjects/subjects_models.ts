import mongoose from "mongoose";

//import User from "../users/user_models.js";

const subjectsSchema = new mongoose.Schema({
    name :{ type: String,required : true},
    teacher: {type: String, required: true},
    alumni:{type:mongoose.Schema.Types.ObjectId}
});

export interface ISubjects{
    name : string;
    teacher:string;
    alumni:mongoose.Types.ObjectId[];
}

const subjects = mongoose.model('Subjects', subjectsSchema);
export default subjects;
