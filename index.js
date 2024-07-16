// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const organizationRoutes = require('./routes/organization');
const leadRoutes = require('./routes/lead'); // Import lead routes
const teamRouts = require('./routes/team')
const projectRoutes = require('./routes/project')
const ticketRoutes = require('./routes/ticket');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (HTML, CSS, JS) from 'public' folder

// Middleware
app.use(bodyParser.json());
app.use('/organizations', organizationRoutes);
app.use('/leads', leadRoutes);
app.use('/projects', projectRoutes);
app.use('/teams', teamRouts);
app.use('/tickets', ticketRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Route to check MongoDB connection status
app.get('/status', (req, res) => {
    const connectionState = mongoose.connection.readyState;
    const statusMap = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting'
    };
    res.send({ status: statusMap[connectionState] });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
