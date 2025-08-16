import React, { useState } from "react";
import { format } from "date-fns";

// Services and Branches data (as already defined)
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
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", notes: "" });

  // Summary state
  const selectedDetails = services.filter(s => selectedServices.includes(s.id));
  const totalPrice = selectedDetails.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedDetails.reduce((sum, s) => sum + s.duration, 0);

  const toggleService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Format selected date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch {
      return dateString;
    }
  };

  const branchObj = branches.find(b => b.id === branch);

  return (
    <div className="max-w-4xl mx-auto p-6 text-pink-800">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-4">Book Your Appointment</h1>
      <p className="text-center text-pink-700 mb-10">Choose your services, preferred location, and time that works best for you</p>

      {/* Services */}
      <div className="mb-10 border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Select Services</h2>
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex justify-between items-center border p-4 mb-3 rounded-md cursor-pointer ${selectedServices.includes(service.id) ? "bg-pink-50 border-pink-400" : "hover:border-pink-300"}`}
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
            className={`border p-4 mb-3 rounded-md cursor-pointer ${branch === b.id ? "bg-pink-50 border-pink-400" : "hover:border-pink-300"}`}
          >
            <h3 className="font-semibold text-lg mb-1">{b.name}</h3>
            <p className="text-sm mb-1">{b.address}</p>
            <p className="text-sm">📞 {b.phone} &nbsp;&nbsp; 🕒 {b.hours}</p>
          </div>
        ))}
      </div>

      {/* Date & Time */}
      <div className="mb-10 border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Date & Time</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Select Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Select Time</label>
            <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full border rounded px-4 py-2">
              <option value="">Choose time</option>
              {[...Array(20)].map((_, i) => {
                const h = 9 + Math.floor(i / 2);
                const m = i % 2 === 0 ? "00" : "30";
                return <option key={i}>{`${h}:${m} ${h < 12 ? "AM" : "PM"}`}</option>;
              })}
            </select>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="mb-10 border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input name="firstName" onChange={handleChange} value={formData.firstName} placeholder="First Name *" className="border rounded px-4 py-2" />
          <input name="lastName" onChange={handleChange} value={formData.lastName} placeholder="Last Name *" className="border rounded px-4 py-2" />
          <input name="email" type="email" onChange={handleChange} value={formData.email} placeholder="Email *" className="border rounded px-4 py-2" />
          <input name="phone" type="tel" onChange={handleChange} value={formData.phone} placeholder="Phone *" className="border rounded px-4 py-2" />
        </div>
        <textarea
          name="notes"
          onChange={handleChange}
          value={formData.notes}
          placeholder="Any special requests or notes for your stylist..."
          className="border rounded px-4 py-2 w-full"
          rows={3}
        ></textarea>
      </div>

      {/* Booking Summary Section */}
      <div className="mb-10 border rounded-lg p-6 bg-pink-50">
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
          <span className="font-bold text-pink-600 text-lg">${totalPrice}</span>
        </div>
        <div className="my-4 border-t" />
        <div className="mb-2 flex justify-between">
          <span>Location:</span>
          <span>{branchObj ? branchObj.name : <span className="text-pink-400">No location selected</span>}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Date:</span>
          <span>{date ? formatDate(date) : <span className="text-pink-400">No date selected</span>}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Time:</span>
          <span>{time || <span className="text-pink-400">No time selected</span>}</span>
        </div>
      </div>

      {/* Book Appointment Button */}
      <button
        type="button"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-300 via-yellow-200 to-yellow-400 border-2 border-[#FFD700] text-[#a6466c] font-bold text-lg shadow mt-2 transition hover:from-yellow-200 hover:via-pink-300 hover:to-yellow-400 hover:shadow-lg"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default BookingForm;
