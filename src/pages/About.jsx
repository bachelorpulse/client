import { useState } from 'react';

const defaultContent = {
  headline: 'Our Mission',
  subheadline: 'We believe in creating software that doesn\'t just solve problems, but transforms how people work. Founded in 2024, our team of experts is dedicated to pushing the boundaries of what\'s possible.',
  t1Name: '[Name Placeholder]',
  t1Role: '[Role Placeholder]',
  t2Name: '[Name Placeholder]',
  t2Role: '[Role Placeholder]',
  t3Name: '[Name Placeholder]',
  t3Role: '[Role Placeholder]'
};

const About = ({ editMode = false }) => {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('about_content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const handleChange = (key, e) => {
    const newContent = { ...content, [key]: e.currentTarget.innerText };
    setContent(newContent);
    localStorage.setItem('about_content', JSON.stringify(newContent));
  };

  return (
    <div className="animate-fade-in container section">
      <div className="glow-bg" style={{ right: '-10%', top: '10%' }}></div>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 
          contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('headline', e)}
          style={{ fontSize: '3.5rem', marginBottom: '24px' }}
        >
          {content.headline}
        </h1>
        <p 
          contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('subheadline', e)}
          style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '60px' }}
        >
          {content.subheadline}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {/* Team Member 1 */}
        <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--bg-secondary)', margin: '0 auto 20px', border: '1px solid var(--border-color)' }}></div>
          <h3 contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('t1Name', e)} style={{ marginBottom: '8px' }}>{content.t1Name}</h3>
          <p contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('t1Role', e)} style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{content.t1Role}</p>
        </div>
        {/* Team Member 2 */}
        <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--bg-secondary)', margin: '0 auto 20px', border: '1px solid var(--border-color)' }}></div>
          <h3 contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('t2Name', e)} style={{ marginBottom: '8px' }}>{content.t2Name}</h3>
          <p contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('t2Role', e)} style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{content.t2Role}</p>
        </div>
        {/* Team Member 3 */}
        <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--bg-secondary)', margin: '0 auto 20px', border: '1px solid var(--border-color)' }}></div>
          <h3 contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('t3Name', e)} style={{ marginBottom: '8px' }}>{content.t3Name}</h3>
          <p contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('t3Role', e)} style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{content.t3Role}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
