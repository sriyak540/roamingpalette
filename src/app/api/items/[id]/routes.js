import express from "express";
import Post from "../../../../models/postschema";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (e) {
        res.status(500).json({message: "Failed to fetch posts", e});
    }
});

router.post("/", async (req, res) => {
    const { username, location, description, tags, image } = req.body;

    const newPost = new Post({
        username, 
        location,
        description,
        tags: tags.split(" "),
        image,
    });

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (e) {
        res.status(500).json({message: "Failed to create post", e});
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json({message: "Post deleted successfully", deletedPost});
    } catch (e) {
        res.status(500).json({message: "Failed to delete post", e});
    }
});

export default router;