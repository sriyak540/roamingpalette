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
});

module.exports = mongoose.model("Posts", PostSchema);
