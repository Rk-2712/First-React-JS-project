const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongodbUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/university-db';
mongoose.connect(mongodbUri)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Mongoose Schema & Model for Contacts
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
  },
  subject: {
    type: String,
    trim: true,
    default: ''
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// REST API Endpoints

// 1. Submit a contact form (Create)
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    const savedContact = await newContact.save();
    res.status(201).json({
      success: true,
      message: 'Message saved successfully!',
      data: savedContact
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Error occurred while saving message.'
    });
  }
});

// 2. Get all contact messages (Read)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error occurred while fetching messages.'
    });
  }
});

// 3. Delete a contact message (Delete)
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);
    
    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: 'Message not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Message deleted successfully!',
      data: deletedContact
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error occurred while deleting message.'
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
