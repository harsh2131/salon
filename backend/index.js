require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookingsRouter = require("./routes/booking");  // Singular 'booking'

const app = express();
app.use(express.json());

// Connect to MongoDB with error handling
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process on connection failure
  });

// API route for bookings
app.use("/api/bookings", bookingsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
