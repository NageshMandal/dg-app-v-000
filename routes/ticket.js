// routes/ticket.js

const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket');

// Create a new ticket
router.post('/', async (req, res) => {
    const ticket = new Ticket({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        assignedTo: req.body.assignedTo,
        projectId: req.body.projectId
    });
    try {
        const savedTicket = await ticket.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all tickets
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one ticket by ID
router.get('/:id', getTicket, (req, res) => {
    res.json(res.ticket);
});

// Update a ticket
router.patch('/:id', getTicket, async (req, res) => {
    if (req.body.title != null) {
        res.ticket.title = req.body.title;
    }
    if (req.body.description != null) {
        res.ticket.description = req.body.description;
    }
    if (req.body.status != null) {
        res.ticket.status = req.body.status;
    }
    if (req.body.priority != null) {
        res.ticket.priority = req.body.priority;
    }
    if (req.body.assignedTo != null) {
        res.ticket.assignedTo = req.body.assignedTo;
    }
    if (req.body.projectId != null) {
        res.ticket.projectId = req.body.projectId;
    }
    try {
        const updatedTicket = await res.ticket.save();
        res.json(updatedTicket);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a ticket
router.delete('/:id', getTicket, async (req, res) => {
    try {
        await res.ticket.deleteOne();
        res.json({ message: 'Deleted Ticket' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get ticket by ID
async function getTicket(req, res, next) {
    let ticket;
    try {
        ticket = await Ticket.findById(req.params.id);
        if (ticket == null) {
            return res.status(404).json({ message: 'Cannot find ticket' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.ticket = ticket;
    next();
}

module.exports = router;
