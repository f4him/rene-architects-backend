import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
});


export default mongoose.model("Post", postSchema);