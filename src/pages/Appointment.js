import Footer from '../components/Footer';
import { useState } from 'react';

const Appointment = () => {
  const [form, setForm] = useState({ name: '', date: '', service: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${form.name}`);
  };

  return (
    <>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-2 border" required
            onChange={e => setForm({ ...form, name: e.target.value })} />
          <input type="date" className="w-full p-2 border" required
            onChange={e => setForm({ ...form, date: e.target.value })} />
          <input type="text" placeholder="Service" className="w-full p-2 border" required
            onChange={e => setForm({ ...form, service: e.target.value })} />
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Book Now</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;