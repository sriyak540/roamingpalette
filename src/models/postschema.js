const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    thumbsUp: { 
        type: Number, 
        default: 0 
    },
    thumbsDown: { 
        type: Number, 
        default: 0 
    },
});

module.exports = mongoose.model("Posts", PostSchema);
