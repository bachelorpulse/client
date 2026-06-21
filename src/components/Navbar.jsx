import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Landing (Funnel)', path: '/landing' }
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="brand">
          <div className="logo-placeholder"></div>
          <span>Startup<span className="text-gradient">X</span></span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={location.pathname === link.path ? 'active-link' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary get-started-btn" onClick={() => setIsOpen(false)}>Get Started</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
