import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import EditableImage from '../components/EditableImage';

const defaultContent = {
  trustText: 'Trusted by 10,000+ startups',
  headline: 'Stop managing. <br/>Start <span class="text-gradient">scaling.</span>',
  subheadline: 'Join the waitlist today and get 6 months of our premium tier absolutely free when we launch.',
  btnText: 'Get Early Access'
};

const Landing = ({ editMode = false }) => {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('landing_content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const handleChange = (key, e) => {
    const newContent = { ...content, [key]: e.currentTarget.innerText };
    setContent(newContent);
    localStorage.setItem('landing_content', JSON.stringify(newContent));
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '100px' }}>
      <div className="glow-bg" style={{ top: '0', left: '50%', transform: 'translateX(-50%)' }}></div>
      
      <div className="container" style={{ textAlign: 'center', paddingTop: '100px', maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#fbbf24', marginBottom: '16px' }}>
          {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#fbbf24" />)}
        </div>
        
        <p 
          contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('trustText', e)}
          style={{ fontWeight: '500', marginBottom: '24px' }}
        >
          {content.trustText}
        </p>
        
        <h1 
          contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('headline', e)}
          style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: '1.1' }}
        >
          {/* dangerouslySetInnerHTML is used here as a shortcut for the demo to render the <br> and <span> if they exist */}
          <span dangerouslySetInnerHTML={{ __html: content.headline }} />
        </h1>
        
        <p 
          contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('subheadline', e)}
          style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px' }}
        >
          {content.subheadline}
        </p>

        {/* Example of Editable Image on Landing Page */}
        <div style={{ margin: '0 auto 40px', maxWidth: '400px' }}>
          <EditableImage 
            srcKey="landing_hero_img" 
            defaultSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            editMode={editMode}
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
          />
        </div>

        <form className="glass-panel" style={{ display: 'flex', padding: '8px', maxWidth: '500px', margin: '0 auto', borderRadius: '50px' }} onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
          <input 
            type="email" 
            placeholder="Enter your work email" 
            required
            style={{ flex: 1, background: 'transparent', border: 'none', padding: '0 24px', color: 'white', outline: 'none', fontSize: '1rem', width: '100%' }} 
          />
          <button type="submit" className="btn btn-primary" style={{ borderRadius: '40px', padding: '12px 32px' }}>
            <span contentEditable={editMode} suppressContentEditableWarning={true} onBlur={(e) => handleChange('btnText', e)}>{content.btnText}</span>
          </button>
        </form>

        <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {['No credit card required', 'Cancel anytime', 'Setup in 5 minutes'].map((text, i) => (
             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                <Check size={16} color="var(--accent-primary)" /> {text}
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
