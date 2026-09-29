import './Services.css';

const services = [
  {
    id: 1,
    icon: '🏠',
    title: 'Residential Cleaning',
    description: 'Thorough top-to-bottom cleaning for your home. We handle kitchens, bathrooms, living areas, and bedrooms — leaving every corner spotless.',
    features: ['Weekly & bi-weekly plans', 'All surfaces & floors', 'Kitchen & bathroom deep clean'],
    color: '#e8f5ee',
    accent: '#2e7d52',
  },
  {
    id: 2,
    icon: '🏢',
    title: 'Office Cleaning',
    description: 'Keep your workspace productive and professional. We clean offices, meeting rooms, lobbies, and break areas on your schedule.',
    features: ['Before/after hours service', 'Desks, floors & glass', 'Restroom sanitization'],
    color: '#e8f0f5',
    accent: '#2a6496',
  },
  {
    id: 3,
    icon: '🧹',
    title: 'Deep Cleaning',
    description: 'An intensive full-property clean that reaches every hidden corner — behind appliances, inside cabinets, grout lines, and more.',
    features: ['Inside appliances & cabinets', 'Grout & tile scrubbing', 'Wall wipe-downs'],
    color: '#f5f0e8',
    accent: '#8a6200',
  },
  {
    id: 4,
    icon: '📦',
    title: 'Move-In / Move-Out',
    description: 'Start fresh or leave on a high note. Our move cleaning service ensures properties are spotless for new occupants or final inspections.',
    features: ['Security deposit-ready clean', 'All rooms & closets', 'Window sills & tracks'],
    color: '#f0e8f5',
    accent: '#6a3090',
  },
  {
    id: 5,
    icon: '🔨',
    title: 'Post-Construction',
    description: 'Dust, debris, and residue from renovations removed professionally. We leave your newly built or remodeled space move-in ready.',
    features: ['Dust & debris removal', 'Window & fixture cleaning', 'Floor polishing'],
    color: '#f5ece8',
    accent: '#b84a1a',
  },
  {
    id: 6,
    icon: '🛋️',
    title: 'Carpet & Upholstery',
    description: 'Revive your carpets, sofas, and upholstery with professional steam cleaning that removes stains, odors, and allergens.',
    features: ['Steam & dry cleaning', 'Stain & odor removal', 'Allergen treatment'],
    color: '#e8f5f2',
    accent: '#1a8a72',
  },
];

export default function Services() {
  const handleBooking = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Cleaning Services</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            From everyday tidying to intensive deep cleans, we have a service tailored to every need — delivered by trained, trustworthy professionals.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`service-card animate-on-scroll animate-delay-${(i % 3) + 1}`}
            >
              <div
                className="service-card__icon-wrap"
                style={{ background: service.color }}
                aria-hidden="true"
              >
                <span className="service-card__icon">{service.icon}</span>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((f) => (
                  <li key={f} className="service-card__feature">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={service.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="service-card__btn"
                style={{ color: service.accent, borderColor: service.accent }}
                onClick={handleBooking}
              >
                Book This Service
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <div
                className="service-card__accent-bar"
                style={{ background: service.accent }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
