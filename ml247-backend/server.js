const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

const PLACE_ID = process.env.PLACE_ID;
const API_KEY = process.env.API_KEY;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/posts', require('./routes/posts'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/reviews', async (req, res) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
      params: {
        place_id: PLACE_ID,
        fields: 'reviews',
        key: API_KEY
      }
    });
    res.json(response.data.result.reviews || []);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).send('Error fetching reviews');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));