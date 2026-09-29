import './Hero.css';

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero">
      {/* Background image via CSS + overlay */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <div className="hero__badge animate-on-scroll">
          <span className="hero__badge-dot" aria-hidden="true" />
          Trusted by 2,000+ Happy Clients
        </div>

        <h1 className="hero__headline animate-on-scroll animate-delay-1">
          A Cleaner Space.<br />
          <span className="hero__headline-accent">A Better Life.</span>
        </h1>

        <p className="hero__subtext animate-on-scroll animate-delay-2">
          Professional, reliable, and affordable cleaning services for homes and businesses.
          We bring the sparkle — you enjoy the results.
        </p>

        <div className="hero__ctas animate-on-scroll animate-delay-3">
          <button
            className="btn btn-primary btn-lg hero__cta-primary"
            onClick={() => handleScroll('#contact')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Book a Cleaning
          </button>
          <button
            className="btn btn-secondary btn-lg hero__cta-secondary"
            onClick={() => handleScroll('#services')}
          >
            View Our Services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

        {/* Trust signals */}
        <div className="hero__stats animate-on-scroll animate-delay-4">
          <div className="hero__stat">
            <span className="hero__stat-number">2,000+</span>
            <span className="hero__stat-label">Happy Clients</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-number">8 Years</span>
            <span className="hero__stat-label">Experience</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Satisfaction Focus</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-number">50+</span>
            <span className="hero__stat-label">Trained Cleaners</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero__scroll-indicator"
        onClick={() => handleScroll('#services')}
        aria-label="Scroll to services"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
    </section>
  );
}
