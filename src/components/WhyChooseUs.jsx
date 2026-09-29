import './WhyChooseUs.css';

const reasons = [
  {
    icon: '👨‍💼',
    title: 'Experienced Cleaners',
    description: 'Our cleaners average 5+ years of professional experience. Fully vetted, trained, and dedicated to excellence on every job.',
    stat: '50+',
    statLabel: 'Trained Professionals',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Products',
    description: 'We use plant-based, non-toxic cleaning solutions that are tough on grime, gentle on surfaces, and safe for children and pets.',
    stat: '100%',
    statLabel: 'Green Certified',
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Premium cleaning without the premium price tag. Transparent quotes, no hidden fees, and flexible packages for every budget.',
    stat: '3',
    statLabel: 'Flexible Packages',
  },
  {
    icon: '📆',
    title: 'Flexible Scheduling',
    description: 'Book online in minutes. Choose mornings, afternoons, or evenings — including weekends. Reschedule anytime with no penalties.',
    stat: '7',
    statLabel: 'Days a Week',
  },
  {
    icon: '✅',
    title: '100% Satisfaction Focus',
    description: "We stand behind every clean. If something isn't right, we'll come back and fix it — no questions, no hassle.",
    stat: '4.9★',
    statLabel: 'Average Rating',
  },
  {
    icon: '🔒',
    title: 'Insured & Bonded',
    description: 'Every team member is fully insured and bonded. Your home and valuables are protected on every visit — complete peace of mind.',
    stat: '$2M',
    statLabel: 'Liability Coverage',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="why">
      {/* Background decorative elements */}
      <div className="why__bg-deco" aria-hidden="true">
        <div className="why__bg-circle why__bg-circle--1" />
        <div className="why__bg-circle why__bg-circle--2" />
      </div>

      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Why SparkClean</span>
          <h2 className="section-title">Why Families &amp; Businesses Choose Us</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            We combine expertise, technology, and genuine care to deliver cleaning that goes beyond the surface — every time.
          </p>
        </div>

        <div className="why__grid">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`why-card animate-on-scroll animate-delay-${(i % 3) + 1}`}
            >
              <div className="why-card__header">
                <div className="why-card__icon" aria-hidden="true">{reason.icon}</div>
                <div className="why-card__stat">
                  <span className="why-card__stat-num">{reason.stat}</span>
                  <span className="why-card__stat-label">{reason.statLabel}</span>
                </div>
              </div>
              <h3 className="why-card__title">{reason.title}</h3>
              <p className="why-card__desc">{reason.description}</p>
              <div className="why-card__check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Included in all plans
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
