import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String
    }
});


export default mongoose.model("Project", projectSchema);