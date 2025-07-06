import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-pink-500 p-4 text-white flex justify-between">
    <h1 className="text-xl font-bold">THE VANITY • ATELIER
</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/appointment">Appointment</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;