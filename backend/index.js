require('dotenv').config();
const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.use(cors())

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/salon';

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.use('/api', require('./routes/appointmentRoutes'));
app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
