import { useState } from 'react';
import { Link } from 'react-router-dom';

const defaultContent = {
  heroTag: 'Introducing StartupX 2.0',
  heroTitle: 'Innovate at the speed of thought.',
  heroDesc: 'Empower your team with next-generation tools designed for scale, speed, and absolute precision.',
  sectionTitle: 'Built for the future.',
  sectionDesc: 'Everything you need to manage your business effectively.',
  f1Title: 'Lightning Fast',
  f1Desc: 'Optimized for speed and performance. Your data syncs in real-time across all devices.',
  f2Title: 'Enterprise Security',
  f2Desc: 'Bank-grade encryption ensures your sensitive data is always protected.',
  f3Title: 'Global Scale',
  f3Desc: 'Deploy worldwide instantly. Our infrastructure scales with you automatically.'
};

const Home = ({ editMode = false }) => {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('site_content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const handleChange = (key, e) => {
    const newContent = { ...content, [key]: e.currentTarget.innerText };
    setContent(newContent);
    // Save to local storage automatically so the main website updates
    localStorage.setItem('site_content', JSON.stringify(newContent));
  };

  return (
    <div className="animate-fade-in" style={{ paddingTop: editMode ? '0' : '0' }}>
      <div className="glow-bg" style={{ top: '-20%', left: '20%' }}></div>
      
      <section className="section" style={{ paddingTop: '120px', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="container">
          <div 
            contentEditable={editMode} suppressContentEditableWarning={true}
            onBlur={(e) => handleChange('heroTag', e)}
            style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '30px', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '24px', fontSize: '0.9rem' }}
          >
            {content.heroTag}
          </div>
          <h1 
            contentEditable={editMode} suppressContentEditableWarning={true}
            onBlur={(e) => handleChange('heroTitle', e)}
            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '24px', letterSpacing: '-2px' }}
          >
            {content.heroTitle}
          </h1>
          <p 
            contentEditable={editMode} suppressContentEditableWarning={true}
            onBlur={(e) => handleChange('heroDesc', e)}
            style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px' }}
          >
            {content.heroDesc}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/landing" className="btn btn-primary" onClick={(e) => editMode && e.preventDefault()}>Start Free Trial</Link>
            <Link to="/contact" className="btn btn-secondary" onClick={(e) => editMode && e.preventDefault()}>Book a Demo</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 
              contentEditable={editMode} suppressContentEditableWarning={true}
              onBlur={(e) => handleChange('sectionTitle', e)}
              style={{ fontSize: '2.5rem', marginBottom: '16px' }}
            >
              {content.sectionTitle}
            </h2>
            <p 
              contentEditable={editMode} suppressContentEditableWarning={true}
              onBlur={(e) => handleChange('sectionDesc', e)}
              style={{ color: 'var(--text-secondary)' }}
            >
              {content.sectionDesc}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* Feature 1 */}
            <div className="glass-panel" style={{ padding: '40px', cursor: editMode ? 'text' : 'pointer' }}>
              <h3 contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('f1Title', e)} style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{content.f1Title}</h3>
              <p contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('f1Desc', e)} style={{ color: 'var(--text-secondary)' }}>{content.f1Desc}</p>
            </div>
            {/* Feature 2 */}
            <div className="glass-panel" style={{ padding: '40px', cursor: editMode ? 'text' : 'pointer' }}>
              <h3 contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('f2Title', e)} style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{content.f2Title}</h3>
              <p contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('f2Desc', e)} style={{ color: 'var(--text-secondary)' }}>{content.f2Desc}</p>
            </div>
            {/* Feature 3 */}
            <div className="glass-panel" style={{ padding: '40px', cursor: editMode ? 'text' : 'pointer' }}>
              <h3 contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('f3Title', e)} style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{content.f3Title}</h3>
              <p contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('f3Desc', e)} style={{ color: 'var(--text-secondary)' }}>{content.f3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
