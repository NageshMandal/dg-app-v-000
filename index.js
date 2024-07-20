const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path'); // Add this for resolving paths
const organizationRoutes = require('./routes/organization');
const leadRoutes = require('./routes/lead');
const teamRoutes = require('./routes/team'); // Fix typo here
const projectRoutes = require('./routes/project');
const ticketRoutes = require('./routes/ticket');
const userRoutes = require('./routes/user'); // Import user routes
const contactRoutes = require('./routes/contacts');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (HTML, CSS, JS) from 'public' folder
app.use(bodyParser.json());
// Middleware
app.use(express.json());

app.use('/organizations', organizationRoutes);
app.use('/leads', leadRoutes);
app.use('/projects', projectRoutes);
app.use('/teams', teamRoutes);
app.use('/tickets', ticketRoutes);
app.use('/users', userRoutes);
app.use('/contacts', contactRoutes); 

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

// Catch-all route to serve index.html for any other route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
