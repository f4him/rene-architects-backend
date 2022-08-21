import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'rene_admin',
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    passsword:{
        type: String,
        required: true,
        minlength: 6
    }
});


export default mongoose.model("User", userSchema);