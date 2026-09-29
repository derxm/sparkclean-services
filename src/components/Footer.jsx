import './Footer.css';

const footerLinks = {
  Services: [
    'Residential Cleaning',
    'Office Cleaning',
    'Deep Cleaning',
    'Move-In / Move-Out',
    'Post-Construction',
    'Carpet & Upholstery',
  ],
  Company: [
    'About Us',
    'How It Works',
    'Pricing',
    'Testimonials',
    'Careers',
    'Blog',
  ],
  Support: [
    'Book a Cleaning',
    'Contact Us',
    'FAQ',
    'Privacy Policy',
    'Terms of Service',
    'Refund Policy',
  ],
};

export default function Footer() {
  const handleNav = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container footer__top-inner">
          {/* Brand column */}
          <div className="footer__brand">
            <a
              href="#home"
              className="footer__logo"
              onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
              aria-label="SparkClean Services Home"
            >
              <span className="footer__logo-icon" aria-hidden="true">✦</span>
              <span className="footer__logo-text">Spark<strong>Clean</strong></span>
            </a>
            <p className="footer__tagline">
              Professional, reliable, and eco-friendly cleaning services for homes and businesses across Austin and beyond.
            </p>
            <div className="footer__social" aria-label="Social media links">
              <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://linkedin.com" className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>

            {/* Rating badges */}
            <div className="footer__badges">
              <div className="footer__badge">
                <span>⭐</span>
                <span>4.9 Google Rating</span>
              </div>
              <div className="footer__badge">
                <span>🏆</span>
                <span>Best of Austin 2025</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer__col">
              <h4 className="footer__col-title">{category}</h4>
              <ul className="footer__col-links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__col-link" onClick={(e) => e.preventDefault()}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} SparkClean Services. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" onClick={(e) => e.preventDefault()} className="footer__bottom-link">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer__bottom-link">Terms of Service</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer__bottom-link">Accessibility</a>
          </div>
          <p className="footer__made">
            Made with 💚 for cleaner spaces
          </p>
        </div>
      </div>
    </footer>
  );
}
