// models/ticket.js

const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200
    },
    description: {
        type: String,
        maxlength: 1000
    },
    status: {
        type: String,
        enum: ['open', 'in progress', 'closed'],
        default: 'open',
        required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low',
        required: true
    },
    assignedTo: {
        type: String
        // You can optionally add custom validation here if needed
    },
    projectId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ticket', ticketSchema);
