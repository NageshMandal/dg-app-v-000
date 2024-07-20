// routes/contact.js
const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const Contact = require('../models/contact');
const mongoose = require('mongoose');
const router = express.Router();


const upload = multer({ dest: 'uploads/' });

// Route to save a single contact
router.post('/saveContact', async (req, res) => {
    const { name, email, phone, address } = req.body;

    try {
        const newContact = new Contact({ name, email, phone, address });
        await newContact.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving contact');
    }
});

// Route to get all contacts
router.get('/getAllContacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Route to get a single contact by ID
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        console.error('Error fetching contact:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to update a contact
router.patch('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to delete a contact
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Endpoint to handle file upload
router.post('/upload-contacts', upload.single('file'), async (req, res) => {
    try {
        const filePath = req.file.path;
        const fileExt = path.extname(req.file.originalname).toLowerCase();
        let contacts = [];

        console.log(`Processing file: ${filePath} with extension ${fileExt}`);

        if (fileExt === '.csv') {
            // Parse CSV file
            fs.createReadStream(filePath)
                .pipe(csvParser())
                .on('data', (row) => {
                    console.log('CSV Row:', row); // Log each row
                    contacts.push(row);
                })
                .on('end', async () => {
                    console.log('CSV Parsing Complete:', contacts);
                    if (contacts.length > 0) {
                        await Contact.insertMany(contacts);
                    }
                    fs.unlinkSync(filePath); // Remove file after processing
                    res.redirect('/');
                })
                .on('error', (error) => {
                    console.error('CSV Parsing Error:', error);
                    fs.unlinkSync(filePath);
                    res.status(500).json({ message: 'Error processing CSV file' });
                });
        } else if (fileExt === '.xlsx') {
            // Parse Excel file
            const workbook = xlsx.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            contacts = xlsx.utils.sheet_to_json(worksheet);

            console.log('Excel Data:', contacts);
            if (contacts.length > 0) {
                await Contact.insertMany(contacts);
            }
            fs.unlinkSync(filePath); // Remove file after processing
            res.redirect('/');
        } else {
            fs.unlinkSync(filePath); // Remove unsupported file
            res.status(400).json({ message: 'Unsupported file format' });
        }
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
