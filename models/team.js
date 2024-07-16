// models/team.js

const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
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
    leadId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Team', teamSchema);
