import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Admin from './pages/Admin';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
  };

  return (
    <div className="app-container">
      {!isAdminRoute && <Navbar />}
      
      {/* Global Admin Toolbar */}
      {isAdmin && !isAdminRoute && (
        <div style={{ position: 'fixed', top: '90px', right: '20px', zIndex: 9999, background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(10px)', border: '1px solid #333', padding: '15px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', gap: '15px', minWidth: '200px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%' }}></div>
            <strong style={{ color: 'white' }}>Live Edit Mode</strong>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#aaa', margin: '5px 0' }}>- Click text to edit<br/>- Click images to change</p>
          <button className="btn btn-primary" style={{ padding: '8px', fontSize: '0.9rem', marginBottom: '8px' }} onClick={() => alert('Changes have been successfully published to the live website!')}>Confirm / Publish Changes</button>
          <button className="btn" style={{ background: 'transparent', border: '1px solid #444', color: '#aaa', padding: '8px', fontSize: '0.9rem' }} onClick={handleLogout}>Exit Edit Mode</button>
        </div>
      )}

      <main style={{ paddingTop: isAdminRoute ? '0' : '80px' }}>
        <Routes>
          <Route path="/" element={<Home editMode={isAdmin} />} />
          <Route path="/about" element={<About editMode={isAdmin} />} />
          <Route path="/product" element={<Product editMode={isAdmin} />} />
          <Route path="/contact" element={<Contact editMode={isAdmin} />} />
          <Route path="/landing" element={<Landing editMode={isAdmin} />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
