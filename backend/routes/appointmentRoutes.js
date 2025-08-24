const express = require('express');
const AppointmentModel = require('../models/AppointmentModel');
const router = express.Router();

router.get('/',  async(req, res) => {
  res.send('Appointment API is running');
});

router.post('/new/appointment', async (req, res) => {
  try {
    const {Username,email,phone,date,time}=req.body;
    const newAppointment =await
     AppointmentModel.create({
      UserName:Username,
      email:email,
      mobileNo:phone,
      date:date,
      time:time
    })
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });  
  }
});
module.exports = router;

