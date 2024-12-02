const express = require("express");
const User = require("../../../models/userschema");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    console.log("Register route hit");
    try {
        // const existingUser = await User.findOne({ username });
        // if (existingUser) {
        //     return res.status(400).json({ error: "Username already exists"});
        // }

        const newUser = new User({ username, password, email });
        await newUser.save();

        res.status(201).json({ message: "User creater successfully", user: newUser });
    } catch (e) {
        console.error("Error creating user:", e);
        res.status(500).json({ error: "Server error" });
    }
})

module.exports = router;