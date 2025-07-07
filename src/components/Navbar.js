import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-3xl font-playfair font-bold text-pink-600 tracking-wide uppercase"
        >
          The Vanity • Atelier
        </Link>

        {/* Navigation */}
        <div className="flex space-x-8 text-base font-medium">
          <Link
            to="/services"
            className="text-gray-700 hover:text-pink-500 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-pink-500 transition duration-200"
          >
            Contact
          </Link>
          <Link
            to="/appointment"
            className="text-pink-600 border border-pink-500 px-4 py-1.5 rounded-full hover:bg-pink-500 hover:text-white transition duration-200"
          >
            Book Appointment
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-pink-500 transition duration-200"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
