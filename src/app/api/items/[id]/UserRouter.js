import express from 'express';
import UserModel from '../libs/UserModel.js'; // Assuming you create a Mongoose model for users

const router = express.Router();

// GET: Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Add a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
