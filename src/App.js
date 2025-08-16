import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';   // ✅ Navbar
import Footer from './components/Footer';   // ✅ Footer
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
// import Contact from './pages/Contact';
import { FaCrown } from 'react-icons/fa';
import Appointment from './pages/Appointment';
import Particles from './components/Partical';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* ✅ Should be at the top */}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<Appointment />} />

          </Routes>
        </main>

        <Footer /> {/* ✅ Should be at the bottom */}
      </div>
    </Router>
  );
}

export default App;
