// models/project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    description: {
        type: String,
        maxlength: 500
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    teamId: {
        type: String, // Changed from ObjectId to String
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);
