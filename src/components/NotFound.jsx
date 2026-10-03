import './NotFound.css';

export default function NotFound() {
  const handleNav = (href) => {
    window.location.href = '/';
  };

  return (
    <div className="notfound" role="main" aria-labelledby="notfound-title">
      {/* Background blobs */}
      <div className="notfound__bg" aria-hidden="true">
        <div className="notfound__blob notfound__blob--1" />
        <div className="notfound__blob notfound__blob--2" />
        <div className="notfound__blob notfound__blob--3" />
      </div>

      {/* Logo */}
      <a href="/" className="notfound__logo" aria-label="SparkClean Services — Go home">
        <span className="notfound__logo-icon" aria-hidden="true">✦</span>
        <span className="notfound__logo-text">Spark<strong>Clean</strong></span>
      </a>

      <div className="notfound__content">
        {/* Big 404 */}
        <div className="notfound__number" aria-hidden="true">
          <span>4</span>
          <span className="notfound__bucket" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Bucket body */}
              <path d="M30 45 L40 95 H80 L90 45 Z" fill="#2e7d52" opacity="0.9" />
              {/* Bucket top rim */}
              <rect x="25" y="38" width="70" height="10" rx="5" fill="#1b5e38" />
              {/* Bucket handle */}
              <path d="M45 38 Q60 20 75 38" stroke="#1b5e38" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Bubbles / sparkles */}
              <circle cx="55" cy="65" r="5" fill="white" opacity="0.5" />
              <circle cx="70" cy="58" r="3" fill="white" opacity="0.4" />
              <circle cx="60" cy="80" r="4" fill="white" opacity="0.35" />
              {/* Sparkle stars */}
              <text x="18" y="30" fontSize="18" fill="#4caf80" opacity="0.8">✦</text>
              <text x="88" y="28" fontSize="12" fill="#4caf80" opacity="0.6">✦</text>
              <text x="95" y="60" fontSize="10" fill="#7dd9a8" opacity="0.5">✦</text>
            </svg>
          </span>
          <span>4</span>
        </div>

        {/* Message */}
        <h1 id="notfound-title" className="notfound__title">
          Oops! This page got lost in the clutter.
        </h1>
        <p className="notfound__subtitle">
          It looks like the page you were looking for has been swept away. Don't worry — our team is on it. Let's get you back somewhere clean.
        </p>

        {/* CTA buttons */}
        <div className="notfound__actions">
          <a href="/" className="btn btn-primary btn-lg notfound__btn-home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Back to Home
          </a>
          <a href="/#contact" className="btn btn-outline btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Book a Cleaning
          </a>
        </div>

        {/* Quick links */}
        <div className="notfound__links">
          <span className="notfound__links-label">Or jump to:</span>
          <a href="/#services" className="notfound__link">Services</a>
          <span aria-hidden="true">·</span>
          <a href="/#pricing" className="notfound__link">Pricing</a>
          <span aria-hidden="true">·</span>
          <a href="/#about" className="notfound__link">About Us</a>
          <span aria-hidden="true">·</span>
          <a href="/#contact" className="notfound__link">Contact</a>
        </div>
      </div>

      {/* Footer note */}
      <p className="notfound__footer">
        © {new Date().getFullYear()} SparkClean Services · Made with 💚 for cleaner spaces
      </p>
    </div>
  );
}
