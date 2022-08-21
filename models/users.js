import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String
    },

    email:{
        type: String
    },
    passsword:{
        type: String
    }
});


export default mongoose.model("User", userSchema);