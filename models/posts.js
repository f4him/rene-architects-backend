import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type: String
    },
    body:{
        type: String
    }
});


export default mongoose.model("Post", postSchema);