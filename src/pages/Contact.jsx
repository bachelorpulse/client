import { useState } from 'react';
import { Send } from 'lucide-react';

const defaultContent = {
  headline: 'Get in Touch',
  subheadline: "Have questions? We'd love to hear from you."
};

const Contact = ({ editMode = false }) => {
  const [status, setStatus] = useState('');
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('contact_content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const handleChange = (key, e) => {
    const newContent = { ...content, [key]: e.currentTarget.innerText };
    setContent(newContent);
    localStorage.setItem('contact_content', JSON.stringify(newContent));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) return; // Prevent submission in edit mode
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
          <h1 
            contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('headline', e)}
            style={{ fontSize: '3rem', marginBottom: '16px' }}
          >
            {content.headline}
          </h1>
          <p 
            contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('subheadline', e)}
            style={{ color: 'var(--text-secondary)' }}
          >
            {content.subheadline}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Name</label>
            <input type="text" required style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white', outline: 'none' }} placeholder="John Doe" disabled={editMode} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Email</label>
            <input type="email" required style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white', outline: 'none' }} placeholder="john@example.com" disabled={editMode} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Message</label>
            <textarea required rows="5" style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'vertical' }} placeholder="How can we help you?" disabled={editMode}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', opacity: editMode ? 0.7 : 1 }} disabled={editMode}>
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
