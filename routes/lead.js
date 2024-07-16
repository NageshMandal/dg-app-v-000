// routes/lead.js

const express = require('express');
const router = express.Router();
const Lead = require('../models/lead');

// Create a new lead
router.post('/', async (req, res) => {
    const lead = new Lead({
        name: req.body.name,
        email: req.body.email,
        teamId: req.body.teamId
    });
    try {
        const savedLead = await lead.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all leads
router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one lead by ID
router.get('/:id', getLead, (req, res) => {
    res.json(res.lead);
});

// Update a lead
router.patch('/:id', getLead, async (req, res) => {
    if (req.body.name != null) {
        res.lead.name = req.body.name;
    }
    if (req.body.email != null) {
        res.lead.email = req.body.email;
    }
    if (req.body.teamId != null) {
        res.lead.teamId = req.body.teamId;
    }
    try {
        const updatedLead = await res.lead.save();
        res.json(updatedLead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a lead
router.delete('/:id', getLead, async (req, res) => {
    try {
        await res.lead.deleteOne();
        res.json({ message: 'Deleted Lead' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get lead by ID
async function getLead(req, res, next) {
    let lead;
    try {
        lead = await Lead.findById(req.params.id);
        if (lead == null) {
            return res.status(404).json({ message: 'Cannot find lead' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.lead = lead;
    next();
}

module.exports = router;
