import { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulated form submission
    setTimeout(() => {
      setStatus('Message sent successfully! We will get back to you soon.');
    }, 1500);
  };

  return (
    <div className="animate-fade-in container section">
      <div className="glow-bg" style={{ right: '0', top: '10%' }}></div>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Get in <span className="text-gradient">Touch</span></h1>
          <p style={{ color: 'var(--text-secondary)' }}>Have questions? We'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Name</label>
            <input type="text" required style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white', outline: 'none' }} placeholder="John Doe" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Email</label>
            <input type="email" required style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white', outline: 'none' }} placeholder="john@example.com" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Message</label>
            <textarea required rows="5" style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'vertical' }} placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            {status === 'Sending...' ? 'Sending...' : <><Send size={18} style={{ marginRight: '8px' }} /> Send Message</>}
          </button>
          
          {status && status !== 'Sending...' && (
            <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', borderRadius: '8px', textAlign: 'center' }}>
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
