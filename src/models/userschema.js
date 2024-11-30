import mongoose, { Schema } from "mongoose";
import PostSchema from "./postschema";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    },
    posts: {
        type: [PostSchema],
    },
});

export default mongoose.model<IItem>("User", UserSchema);