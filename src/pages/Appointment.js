import React, { useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";

// ================== Services & Branches ==================
const services = [
  { id: 1, name: "Women's Haircut", price: 65, duration: 60 },
  { id: 2, name: "Men's Haircut", price: 35, duration: 30 },
  { id: 3, name: "Hair Coloring", price: 150, duration: 120 },
  { id: 4, name: "Classic Manicure", price: 35, duration: 45 },
  { id: 5, name: "Gel Manicure", price: 50, duration: 60 },
  { id: 6, name: "Classic Pedicure", price: 45, duration: 60 },
  { id: 7, name: "Bridal Hair & Makeup", price: 250, duration: 180 },
  { id: 8, name: "Bridesmaid Styling", price: 100, duration: 90 },
];

const branches = [
  {
    id: "downtown",
    name: "Downtown Location",
    address: "123 Main Street, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Sat: 9am-8pm",
  },
  {
    id: "westside",
    name: "Westside Location",
    address: "456 Oak Avenue, Westside",
    phone: "(555) 234-5678",
    hours: "Mon-Sat: 8am-9pm",
  },
  {
    id: "northside",
    name: "Northside Location",
    address: "789 Pine Road, Northside",
    phone: "(555) 345-6789",
    hours: "Mon-Fri: 8am-8pm",
  },
];

const BookingForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [branch, setBranch] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Service summary
  const selectedDetails = services.filter((s) =>
    selectedServices.includes(s.id)
  );
  const totalPrice = selectedDetails.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedDetails.reduce((sum, s) => sum + s.duration, 0);

  // Toggle services
  const toggleService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch {
      return dateString;
    }
  };

  const branchObj = branches.find((b) => b.id === branch);

  // ============== THE MAGIC BUTTON STYLES ==============
  const buttonClassNames =
    "w-full sm:w-[45%] px-8 py-4 rounded-[2rem] bg-gradient-to-r from-[#fbc2eb] to-[#fd6eab] border-2 border-[#fd6eab] text-[#a6466c] font-extrabold text-2xl shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300";
  const buttonHoverAnimation = {
    scale: 1.02,
    background: "linear-gradient(90deg,#fd6eab,#fbc2eb)",
    color: "#a6466c",
    boxShadow: "0 8px 30px rgba(253,110,171,.12)",
  };
  const buttonTapAnimation = { scale: 0.98 };

  // ============== Booking Handler ==============
  const handleBooking = async () => {
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }
    if (!branch) {
      alert("Please select a location.");
      return;
    }
    if (!date) {
      alert("Please select a date.");
      return;
    }
    if (!time) {
      alert("Please select a time.");
      return;
    }
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill all required personal information fields.");
      return;
    }

    const bookingData = {
      services: selectedDetails,
      branch,
      date,
      time,
      ...formData,
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create booking");
      }

      const result = await response.json();
      alert("Booking successful! Your booking ID: " + result._id);

      // Reset
      setSelectedServices([]);
      setBranch("");
      setDate("");
      setTime("");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: "",
      });
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // =============== UI ===============
  return (
    <div className="max-w-4xl mx-auto p-6 text-pink-800">
     <div className="pt-16"> {/* 16 = 4rem = 64px, adjust according to your navbar height */}
  <h1 className="text-4xl font-bold text-center text-pink-600 mb-4">
    Book Your Appointment
  </h1>
</div>

      <p className="text-center text-pink-700 mb-10">
        Choose your services, preferred location, and time that works best for you
      </p>

      {/* Services */}
      <div className="mb-10 border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Select Services</h2>
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex justify-between items-center border p-4 mb-3 rounded-md cursor-pointer ${
              selectedServices.includes(service.id)
                ? "bg-pink-50 border-pink-400"
                : "hover:border-pink-300"
            }`}
            onClick={() => toggleService(service.id)}
          >
            <div>
              <p className="font-semibold">{service.name}</p>
              <p className="text-sm">{service.duration} min</p>
            </div>
            <p className="font-semibold">${service.price}</p>
          </div>
        ))}
      </div>

      {/* Branch */}
      <div className="mb-10 border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Choose Location</h2>
        {branches.map((b) => (
          <div
            key={b.id}
            onClick={() => setBranch(b.id)}
            className={`border p-4 mb-3 rounded-md cursor-pointer ${
              branch === b.id
                ? "bg-pink-50 border-pink-400"
                : "hover:border-pink-300"
            }`}
          >
            <h3 className="font-semibold text-lg mb-1">{b.name}</h3>
            <p className="text-sm mb-1">{b.address}</p>
            <p className="text-sm">
              📞 {b.phone} &nbsp;&nbsp; 🕒 {b.hours}
            </p>
          </div>
        ))}
      </div>

      {/* Date & Time */}
      <div className="mb-10 border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Date & Time</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Select Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Choose time</option>
              {[...Array(20)].map((_, i) => {
                const h = 9 + Math.floor(i / 2);
                const m = i % 2 === 0 ? "00" : "30";
                return (
                  <option key={i}>{`${h}:${m} ${h < 12 ? "AM" : "PM"}`}</option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="mb-10 border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="First Name *"
            className="border rounded px-4 py-2"
          />
          <input
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Last Name *"
            className="border rounded px-4 py-2"
          />
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Email *"
            className="border rounded px-4 py-2"
          />
          <input
            name="phone"
            type="tel"
            onChange={handleChange}
            value={formData.phone}
            placeholder="Phone *"
            className="border rounded px-4 py-2"
          />
        </div>
        <textarea
          name="notes"
          onChange={handleChange}
          value={formData.notes}
          placeholder="Any special requests or notes for your stylist..."
          className="border rounded px-4 py-2 w-full"
          rows={3}
        />
      </div>

      {/* Booking Summary */}
      <div className="mb-6 border rounded-lg p-6 bg-pink-50">
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
        <div className="mb-2">
          <span className="font-semibold">Selected Services:</span>
          <ul className="ml-4 mt-2">
            {selectedDetails.length === 0 ? (
              <li className="text-pink-400">No services selected.</li>
            ) : (
              selectedDetails.map((service) => (
                <li key={service.id} className="flex justify-between">
                  <span>{service.name}</span>
                  <span>${service.price}</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Total Duration:</span>
          <span>{totalDuration} min</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="font-semibold">Total Price:</span>
          <span className="font-bold text-pink-600 text-lg">
            ${totalPrice}
          </span>
        </div>
        <div className="my-4 border-t" />
        <div className="mb-2 flex justify-between">
          <span>Location:</span>
          <span>
            {branchObj ? (
              branchObj.name
            ) : (
              <span className="text-pink-400">No location selected</span>
            )}
          </span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Date:</span>
          <span>
            {date ? (
              formatDate(date)
            ) : (
              <span className="text-pink-400">No date selected</span>
            )}
          </span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Time:</span>
          <span>{time || <span className="text-pink-400">No time selected</span>}</span>
        </div>
      </div>

      {/* Book Appointment Button */}
      <motion.button
        type="button"
        whileHover={buttonHoverAnimation}
        whileTap={buttonTapAnimation}
        className={buttonClassNames + " mb-12"}
        onClick={handleBooking}
      >
        Book Appointment
      </motion.button>

      {/* Login / Sign Up Buttons */}
      <div className="mt-8 text-center">
        <p className="text-md text-gray-500 mb-4">
          <span className="font-semibold text-pink-500">Login</span> and{" "}
          <span className="font-semibold" style={{ color: "#fbbf24" }}>Sign Up</span> are only for Salon staff.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <motion.button
            type="button"
            whileHover={buttonHoverAnimation}
            whileTap={buttonTapAnimation}
            className={buttonClassNames + " font-extrabold"}
          >
            Login
          </motion.button>
          <motion.button
            type="button"
            whileHover={buttonHoverAnimation}
            whileTap={buttonTapAnimation}
            className={buttonClassNames + " font-extrabold"}
          >
            Sign Up
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
