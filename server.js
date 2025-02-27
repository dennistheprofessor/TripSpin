const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// CORS configuration
const corsOptions = {
  origin: ['https://dennistheprofessor.github.io', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 204
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files from current directory

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('Atlas Earth Animation API is running');
});

// Route to handle email submissions
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    // Call Resend API to add contact to audience
    const response = await resend.contacts.create({
      email: email,
      firstName: '',
      lastName: '',
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });
    
    console.log('Subscription successful:', response);
    return res.status(200).json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    console.error('Error subscribing email:', error);
    return res.status(500).json({ 
      error: 'Failed to subscribe', 
      details: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
