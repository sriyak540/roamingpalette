import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
    },
});

export default mongoose.model<IItem>("Posts", PostSchema);