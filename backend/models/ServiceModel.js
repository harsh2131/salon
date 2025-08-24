const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  Sname: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: Number, // duration in minutes
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Service", ServiceSchema);
