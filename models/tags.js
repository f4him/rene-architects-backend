import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name:{
        type: String
    }
});


export default mongoose.model("Tag", tagSchema);