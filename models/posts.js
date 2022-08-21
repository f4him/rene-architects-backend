import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    date: {
        type: String,                   //date type fix
        default: 'rene_admin',
        required: true
    },
    image:{
        type: String,
    },
    body:{
        type: String,
        required: true
    },
    tags: {
        type: [String]
    }
});


export default mongoose.model("Post", postSchema);