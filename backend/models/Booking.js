const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  services: [
    {
      id: Number,
      name: String,
      price: Number,
      duration: Number,
    },
  ],
  branch: String,
  date: String,   // You can also use Date type if you prefer
  time: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
