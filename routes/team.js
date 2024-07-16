// routes/team.js

const express = require('express');
const router = express.Router();
const Team = require('../models/team');

// Create a new team
router.post('/', async (req, res) => {
    const team = new Team({
        name: req.body.name,
        description: req.body.description,
        leadId: req.body.leadId
    });
    try {
        const savedTeam = await team.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all teams
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one team by ID
router.get('/:id', getTeam, (req, res) => {
    res.json(res.team);
});

// Update a team
router.patch('/:id', getTeam, async (req, res) => {
    if (req.body.name != null) {
        res.team.name = req.body.name;
    }
    if (req.body.description != null) {
        res.team.description = req.body.description;
    }
    if (req.body.leadId != null) {
        res.team.leadId = req.body.leadId;
    }
    try {
        const updatedTeam = await res.team.save();
        res.json(updatedTeam);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a team
router.delete('/:id', getTeam, async (req, res) => {
    try {
        await res.team.deleteOne(); // Use deleteOne() to delete the team
        res.json({ message: 'Deleted team' });
    } catch (err) {
        console.error(`Error deleting team with ID ${req.params.id}:`, err); // Log error details
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get team by ID
async function getTeam(req, res, next) {
    let team;
    try {
        team = await Team.findById(req.params.id);
        if (team == null) {
            return res.status(404).json({ message: 'Cannot find team' });
        }
    } catch (err) {
        console.error(`Error finding team with ID ${req.params.id}:`, err); // Log error details
        return res.status(500).json({ message: err.message });
    }

    res.team = team;
    next();
}

module.exports = router;
