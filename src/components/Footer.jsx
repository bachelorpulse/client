
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)', padding: '60px 0 30px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ maxWidth: '300px' }}>
          <Link to="/" className="brand" style={{ marginBottom: '16px', display: 'inline-flex' }}>
            <div className="logo-placeholder" style={{ width: '24px', height: '24px' }}></div>
            <span style={{ fontSize: '1.2rem' }}>Startup<span className="text-gradient">X</span></span>
          </Link>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Empowering the next generation of innovators with tools designed for speed and scale.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ marginBottom: '16px' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/product" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Features</Link></li>
              <li><Link to="/landing" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '16px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '30px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} StartupX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
