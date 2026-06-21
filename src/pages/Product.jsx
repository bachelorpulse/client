
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Product = () => {
  const features = [
    'Advanced Analytics Dashboard',
    'Real-time Collaboration',
    'Automated Workflows',
    'Customizable Reporting',
    '24/7 Priority Support',
    'API Access'
  ];

  return (
    <div className="animate-fade-in container section">
      <div className="glow-bg" style={{ left: '0', top: '20%' }}></div>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>The Platform for <span className="text-gradient">Growth</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Explore our suite of powerful tools designed to help you scale faster and smarter.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Seamless Integration</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1.1rem' }}>
              Connect with the tools you already use. Our platform integrates perfectly with your existing workflow, ensuring zero downtime and immediate value.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {features.slice(0,3).map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle2 color="var(--accent-primary)" size={20} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel" style={{ flex: '1', minWidth: '300px', height: '400px', background: 'linear-gradient(45deg, rgba(20,20,20,1) 0%, rgba(30,30,40,1) 100%)' }}>
            {/* Dashboard Mockup Placeholder */}
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/contact" className="btn btn-primary">Request Pricing</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
