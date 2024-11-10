// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '10px',
      backgroundColor: '#007BFF', // Changed to backgroundColor
      color: 'white',
      display: 'flex', // Added display property for flexbox
      justifyContent: 'space-around', // Added to space links evenly
      alignItems: 'center' // Center the items vertically
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
