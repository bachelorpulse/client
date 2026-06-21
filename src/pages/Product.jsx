import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultContent = {
  headline: 'The Platform for Growth',
  subheadline: 'Explore our suite of powerful tools designed to help you scale faster and smarter.',
  featureTitle: 'Seamless Integration',
  featureDesc: 'Connect with the tools you already use. Our platform integrates perfectly with your existing workflow, ensuring zero downtime and immediate value.',
  f1: 'Advanced Analytics Dashboard',
  f2: 'Real-time Collaboration',
  f3: 'Automated Workflows',
  btnText: 'Request Pricing'
};

const Product = ({ editMode = false }) => {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('product_content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const handleChange = (key, e) => {
    const newContent = { ...content, [key]: e.currentTarget.innerText };
    setContent(newContent);
    localStorage.setItem('product_content', JSON.stringify(newContent));
  };

  return (
    <div className="animate-fade-in container section">
      <div className="glow-bg" style={{ left: '0', top: '20%' }}></div>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 
          contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('headline', e)}
          style={{ fontSize: '3.5rem', marginBottom: '24px' }}
        >
          {content.headline}
        </h1>
        <p 
          contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('subheadline', e)}
          style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
        >
          {content.subheadline}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 
              contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('featureTitle', e)}
              style={{ fontSize: '2.5rem', marginBottom: '24px' }}
            >
              {content.featureTitle}
            </h2>
            <p 
              contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('featureDesc', e)}
              style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1.1rem' }}
            >
              {content.featureDesc}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <CheckCircle2 color="var(--accent-primary)" size={20} />
                <span contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('f1', e)}>{content.f1}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <CheckCircle2 color="var(--accent-primary)" size={20} />
                <span contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('f2', e)}>{content.f2}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <CheckCircle2 color="var(--accent-primary)" size={20} />
                <span contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('f3', e)}>{content.f3}</span>
              </li>
            </ul>
          </div>
          <div className="glass-panel" style={{ flex: '1', minWidth: '300px', height: '400px', background: 'linear-gradient(45deg, rgba(20,20,20,1) 0%, rgba(30,30,40,1) 100%)' }}>
            {/* Dashboard Mockup Placeholder */}
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/contact" className="btn btn-primary" onClick={(e) => editMode && e.preventDefault()}>
            <span contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('btnText', e)}>{content.btnText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
