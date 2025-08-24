const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
    trim: true
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service", // Reference to Service model
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  mobileNo: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    enum: [0, 1], // 0 = user, 1 = admin/staff
    default: 0
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending"
  }
}, { timestamps: true });

const AppointmentModel=mongoose.model("Appointment", AppointmentSchema);
module.exports=AppointmentModel;