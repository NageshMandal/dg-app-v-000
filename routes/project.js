// routes/project.js

const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Create a new project
router.post('/', async (req, res) => {
    const project = new Project({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        teamId: req.body.teamId
    });
    try {
        const savedProject = await project.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one project by ID
router.get('/:id', getProject, (req, res) => {
    res.json(res.project);
});

// Update a project
router.patch('/:id', getProject, async (req, res) => {
    if (req.body.name != null) {
        res.project.name = req.body.name;
    }
    if (req.body.description != null) {
        res.project.description = req.body.description;
    }
    if (req.body.startDate != null) {
        res.project.startDate = req.body.startDate;
    }
    if (req.body.endDate != null) {
        res.project.endDate = req.body.endDate;
    }
    if (req.body.teamId != null) {
        res.project.teamId = req.body.teamId;
    }
    try {
        const updatedProject = await res.project.save();
        res.json(updatedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a project
router.delete('/:id', getProject, async (req, res) => {
    try {
        await res.project.deleteOne();
        res.json({ message: 'Deleted Project' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get project by ID
async function getProject(req, res, next) {
    let project;
    try {
        project = await Project.findById(req.params.id);
        if (project == null) {
            return res.status(404).json({ message: 'Cannot find project' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.project = project;
    next();
}

module.exports = router;
