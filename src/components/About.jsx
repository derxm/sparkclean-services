import './About.css';

const highlights = [
  {
    icon: '🏅',
    title: 'Trained & Vetted Staff',
    desc: 'Every cleaner on our team undergoes thorough background checks, hands-on training, and quality assessments before joining.',
  },
  {
    icon: '🌿',
    title: 'Premium Products',
    desc: "We use professional-grade, eco-conscious cleaning products that are tough on dirt but safe for your family and pets.",
  },
  {
    icon: '📅',
    title: 'Flexible Scheduling',
    desc: 'Book a one-time clean or set up a recurring plan — mornings, evenings, or weekends. We work around your life.',
  },
  {
    icon: '🔍',
    title: 'Attention to Detail',
    desc: "Our cleaners don't just tidy — they transform spaces. Every surface, corner, and fixture gets the care it deserves.",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        {/* Image column */}
        <div className="about__visual animate-on-scroll">
          <div className="about__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
              alt="SparkClean professional cleaner working in a modern home"
              className="about__img"
              loading="lazy"
            />
            <div className="about__img-badge">
              <span className="about__img-badge-num">8+</span>
              <span className="about__img-badge-text">Years of<br />Excellence</span>
            </div>
          </div>
          {/* Floating card */}
          <div className="about__float-card">
            <div className="about__float-icon">⭐</div>
            <div>
              <div className="about__float-title">4.9 / 5 Rating</div>
              <div className="about__float-sub">From 1,400+ verified reviews</div>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="about__text">
          <span className="section-label animate-on-scroll">About Us</span>
          <h2 className="section-title animate-on-scroll animate-delay-1">
            Cleaning Done Right,<br />Every Single Time
          </h2>
          <div className="section-divider animate-on-scroll animate-delay-1" style={{ margin: '0 0 24px' }} />
          <p className="about__lead animate-on-scroll animate-delay-2">
            SparkClean Services was founded on one simple belief: a clean space improves every aspect of life — from health and productivity to peace of mind.
          </p>
          <p className="about__body animate-on-scroll animate-delay-2">
            Over the past 8 years, we've grown from a small local team into one of the region's most trusted cleaning services, serving thousands of homes and businesses. What hasn't changed is our commitment to showing up on time, doing the work properly, and leaving every space genuinely clean.
          </p>

          <div className="about__highlights">
            {highlights.map((h, i) => (
              <div key={h.title} className={`about__highlight animate-on-scroll animate-delay-${i + 1}`}>
                <div className="about__highlight-icon" aria-hidden="true">{h.icon}</div>
                <div>
                  <h4 className="about__highlight-title">{h.title}</h4>
                  <p className="about__highlight-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
