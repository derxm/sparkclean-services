import './HowItWorks.css';

const steps = [
  {
    number: '01',
    icon: '🔍',
    title: 'Choose a Service',
    description: 'Browse our range of cleaning services and select the one that fits your needs — residential, office, deep clean, and more.',
  },
  {
    number: '02',
    icon: '📅',
    title: 'Schedule a Date',
    description: 'Pick a date and time that works for you. Book online in under 2 minutes or call us directly — we are always ready to help.',
  },
  {
    number: '03',
    icon: '✨',
    title: 'We Clean Your Space',
    description: 'Our trained professionals arrive on time, fully equipped with premium tools and eco-friendly products. We get to work immediately.',
  },
  {
    number: '04',
    icon: '🏡',
    title: 'Enjoy a Spotless Environment',
    description: "Come home or return to the office to a space that looks, smells, and feels immaculately clean. Relax — you've earned it.",
  },
];

export default function HowItWorks() {
  const handleBooking = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how" className="how-it-works">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Getting a spotless space is easier than ever. Just four simple steps between you and a perfectly clean environment.
          </p>
        </div>

        <div className="how__steps">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`how__step animate-on-scroll animate-delay-${i + 1}`}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="how__connector" aria-hidden="true">
                  <div className="how__connector-line" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="how__connector-arrow"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              )}

              <div className="how__step-card">
                <div className="how__step-number" aria-hidden="true">{step.number}</div>
                <div className="how__step-icon" aria-hidden="true">{step.icon}</div>
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how__cta animate-on-scroll">
          <p className="how__cta-text">Ready to experience the SparkClean difference?</p>
          <button className="btn btn-primary btn-lg" onClick={handleBooking}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Book Your First Clean
          </button>
        </div>
      </div>
    </section>
  );
}
