import { useState } from 'react';

const Admin = () => {
  const [password, setPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      window.location.href = '/'; // Hard reload to apply admin state globally
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', margin: '-80px 0 0 0' }}>
      <form onSubmit={handleLogin} className="glass-panel" style={{ padding: '40px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '10px' }}>Admin Login</h2>
        <p style={{ color: '#a1a1aa', marginBottom: '20px' }}>Login to enable Live Edit Mode</p>
        <input 
          type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password (admin123)" 
          style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #333', background: '#111', color: 'white' }}
        />
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
      </form>
    </div>
  );
};

export default Admin;
