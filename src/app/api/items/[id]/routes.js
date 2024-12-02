// const express = require("express");
// const Post = require("../../../../models/postschema"); 
// const User = require("../../../../models/userschema"); 

// const router = express.Router();

// router.get("/", async (req, res) => {
//     try {
//         const posts = await Post.find(); 
//         res.status(200).json(posts); 
//     } catch (e) {
//         res.status(500).json({ message: "Failed to fetch posts", error: e });
//     }
// });


// router.post("/", async (req, res) => {
//     const { username, location, description, tags, image } = req.body;

//     if (!username || !location || !description || !image) {
//         return res.status(400).json({ message: "Missing required fields" });
//     }

//     const newPost = new Post({
//         username, 
//         location,
//         description,
//         tags: tags ? tags.split(" ") : [],
//         image,
//     });

//     try {
//         await newPost.save(); 
//         res.status(201).json(newPost); 
//     } catch (e) {
//         res.status(500).json({ message: "Failed to create post", error: e }); 
//     }
// });

// router.delete("/:id", async (req, res) => {
//     const { id } = req.params; 

//     try {
//         const deletedPost = await Post.findByIdAndDelete(id);
//         if (!deletedPost) {
//             return res.status(404).json({ message: "Post not found" });
//         }
//         res.status(200).json({ message: "Post deleted successfully", deletedPost }); 
//     } catch (e) {
//         res.status(500).json({ message: "Failed to delete post", error: e });
//     }
// });

// module.exports = router;