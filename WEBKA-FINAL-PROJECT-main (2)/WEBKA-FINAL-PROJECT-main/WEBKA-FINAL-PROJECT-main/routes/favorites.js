const express = require('express');
const Recipe = require('../models/Recipe');
const authMiddleware = require('../middleware/auth');
const Favorite = require('../models/Favorite');
const router = express.Router();

// Add a new favorite
router.post('/add', authMiddleware, async (req, res) => {
    try {
        // Use req.user.id if your auth middleware sets it (or req.session.userId if using sessions)
        const userId = req.user.id;  
        const { recipeName } = req.body;

        // Create and save the favorite document
        const favorite = new Favorite({ userId, recipeName });
        await favorite.save();

        res.status(201).json({ message: 'Favorite added successfully!', favorite });
    } catch (error) {
        console.error("Error adding favorite:", error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
