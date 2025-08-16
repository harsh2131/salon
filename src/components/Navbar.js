import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#FF597B] shadow-md border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-3xl font-playfair font-bold text-white tracking-wide uppercase"
        >
          The Vanity • Atelier
        </Link>

        {/* Navigation */}
        <div className="flex space-x-8 text-base font-medium">
          <Link
            to="/services"
            className="text-white hover:text-gray-900 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-900 transition duration-200"
          >
            Contact
          </Link>
          <Link
            to="/appointment"
            className="text-[#FF597B] bg-white border border-white px-4 py-1.5 rounded-full hover:bg-pink-100 hover:text-[#FF597B] transition duration-200 font-bold shadow"
          >
            Book Appointment
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-900 transition duration-200"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
