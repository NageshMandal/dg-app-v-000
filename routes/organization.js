const express = require('express');
const router = express.Router();
const Organization = require('../models/organization');

// Create a new organization
router.post('/', async (req, res) => {
    const organization = new Organization({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
    });
    try {
        const savedOrganization = await organization.save();
        // Redirect to home page after successful creation
        res.redirect('/'); // Adjust this URL to your home page URL
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all organizations
router.get('/', async (req, res) => {
    try {
        const organizations = await Organization.find();
        res.json(organizations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one organization
router.get('/:id', getOrganization, (req, res) => {
    res.json(res.organization);
});

// Update an organization by ID
router.patch('/:id', async (req, res) => {
    try {
        const updatedOrganization = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrganization) {
            return res.status(404).json({ message: 'Organization not found' });
        }
        res.json(updatedOrganization);
    } catch (err) {
        console.error('Error updating organization:', err);
        res.status(400).json({ message: err.message });
    }
});


// DELETE an organization by ID
router.delete('/:id', async (req, res) => {
    try {
        const organization = await Organization.findByIdAndDelete(req.params.id);
        if (!organization) {
            return res.status(404).json({ message: 'Organization not found' });
        }
        res.json({ message: 'Organization deleted successfully' });
    } catch (err) {
        console.error('Error deleting organization:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Middleware to get organization by ID
async function getOrganization(req, res, next) {
    let organization;
    try {
        organization = await Organization.findById(req.params.id);
        if (organization == null) {
            return res.status(404).json({ message: 'Cannot find organization' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.organization = organization;
    next();
}

module.exports = router;
