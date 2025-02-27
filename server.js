const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON request bodies
app.use(bodyParser.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Resend API Proxy is running');
});

// Proxy endpoint for Resend API
app.post('/api/resend/contacts', async (req, res) => {
  try {
    const { email, apiKey, audienceId } = req.body;
    
    if (!email || !apiKey || !audienceId) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const apiUrl = `https://api.resend.com/audiences/${audienceId}/contacts`;
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        first_name: '',
        last_name: '',
        unsubscribed: false
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Resend API error:', data);
      return res.status(response.status).json(data);
    }
    
    return res.status(200).json(data);
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
