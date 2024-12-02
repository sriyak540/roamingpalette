const express = require("express");
const User = require("../../../models/userschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    console.log("Register route hit");

    if (!username || !password || !email) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword, email });
        await newUser.save();

        res.status(201).json({ message: "User creater successfully", user: username });
    } catch (e) {
        console.error("Error creating user:", e);
        res.status(500).json({ error: "Server error" });
    }
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log("Login route hit");

    if (!username || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Compare the password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // Generate a JWT token
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token, username: user.username });
    } catch (e) {
        console.error("Error logging in user:", e);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;