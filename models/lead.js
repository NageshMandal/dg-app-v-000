// models/lead.js

const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    email: {
        type: String,
        required: true
    },
    teamId: {
        type: String, // Change from ObjectId to String
        required: true
    }
});

module.exports = mongoose.model('Lead', leadSchema);
