const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Define the registration schema
const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  courseMode: {
    type: String,
    required: true
  },
  counsellingNeeded: {
    type: String,
    required: true
  },
  highestQualification: {
    type: String,
    required: true
  },
  agreeTerms: {
    type: Boolean,
    required: true
  },
  contactPreference: {
    type: Boolean,
    required: false
  },
  receiveUpdates: {
    type: Boolean,
    required: false
  }
});

// Create the Registration model
const Registration = mongoose.model('Registration', registrationSchema);

// Handle POST requests to submit registration data
router.post('/', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).send({ message: 'Registration submitted successfully!' });
  } catch (error) {
    console.error('Error saving registration data:', error);
    res.status(500).send({ message: 'Failed to submit registration. Please try again later.' });
  }
});

module.exports = router;
