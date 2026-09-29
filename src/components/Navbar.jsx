import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Update active link based on scroll position
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          aria-label="SparkClean Services - Home"
        >
          <span className="navbar__logo-icon" aria-hidden="true">✦</span>
          <span className="navbar__logo-text">
            Spark<strong>Clean</strong>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link${activeLink === href ? ' navbar__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div className="navbar__actions">
          <a
            href="#contact"
            className="btn btn-primary navbar__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Book Now
          </a>
          <button
            className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar__mobile-links" aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`navbar__mobile-link${activeLink === href ? ' navbar__mobile-link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary navbar__mobile-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            tabIndex={menuOpen ? 0 : -1}
          >
            Book Now
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
