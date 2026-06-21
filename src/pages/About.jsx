

const About = () => {
  return (
    <div className="animate-fade-in container section">
      <div className="glow-bg" style={{ right: '-10%', top: '10%' }}></div>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Our <span className="text-gradient">Mission</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '60px' }}>
          We believe in creating software that doesn't just solve problems, but transforms how people work. Founded in 2024, our team of experts is dedicated to pushing the boundaries of what's possible.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--bg-secondary)', margin: '0 auto 20px', border: '1px solid var(--border-color)' }}></div>
            <h3 style={{ marginBottom: '8px' }}>[Name Placeholder]</h3>
            <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>[Role Placeholder]</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
