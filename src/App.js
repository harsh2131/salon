import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Transparent Decorative Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-pink-200/20 via-white/0 to-blue-200/20" />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;