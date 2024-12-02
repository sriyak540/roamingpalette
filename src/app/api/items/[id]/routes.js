const express = require("express");
const Post = require("../../../../models/postschema"); 
const User = require("../../../../models/userschema"); 

const router = express.Router();

router.post("/add", async (req, res) => {
    const {username, location, description, image, tags} = req.body;

    try {
        if (!username || !location || !description || !image) {
            return res.status(400).json({ error: "All fields required"});
        }

        const newPost = new Post ({ username, location, description, image, tags: tags.split(" ") });
        await newPost.save();

        res.status(201).json({ message: "Post created successfully", post: newPost });
    } catch (e) {
        console.error("Error creating post:", e);
        res.status(500).json({ error: "Server error" });
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
    
        res.status(200).json({ message: "Post deleted successfully", post: deletedPost });
    } catch (e) {
        console.error("Error deleting post:", e);
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ error: "Post not found" });

        res.status(200).json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/posts", async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ error: "Server error" });
    }
});

router.post("/posts/:id/vote", async (req, res) => {
    const { vote } = req.body; // "up" or "down"

    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ error: "Post not found" });

        if (vote === "up") {
            post.thumbsUp += 1;
        } else if (vote === "down") {
            post.thumbsDown += 1;
        }

        await post.save();

        res.status(200).json({ thumbsUp: post.thumbsUp, thumbsDown: post.thumbsDown });
    } catch (error) {
        console.error("Error updating vote:", error);
        res.status(500).json({ error: "Server error" });
    }
})

module.exports = router;