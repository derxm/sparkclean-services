import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homeowner, Austin TX',
    avatar: 'SM',
    avatarColor: '#2e7d52',
    rating: 5,
    title: 'Absolutely transformed our home!',
    review: "I booked SparkClean for a deep clean before a family gathering and I was blown away. They cleaned areas I hadn't even thought about — behind appliances, inside cabinets, every grout line. My home has never looked this good. The team was professional, on time, and incredibly thorough. I've already set up a monthly plan.",
    service: 'Deep Cleaning',
    date: 'September 2026',
  },
  {
    id: 2,
    name: 'James Okonkwo',
    role: 'Office Manager, Tech Startup',
    avatar: 'JO',
    avatarColor: '#1a6496',
    rating: 5,
    title: 'Our office has never been this clean',
    review: "We've tried three cleaning services before SparkClean, and none of them came close. They are reliable, detail-oriented, and the team communicates clearly. Our employees have noticed the difference and morale has genuinely improved. Booking is easy, they always show up, and the quality is consistent every single week.",
    service: 'Office Cleaning',
    date: 'August 2026',
  },
  {
    id: 3,
    name: 'Laura Chen',
    role: 'Property Manager',
    avatar: 'LC',
    avatarColor: '#7a3090',
    rating: 5,
    title: 'My go-to for every move-out clean',
    review: "As a property manager, I need cleaners I can trust completely. SparkClean handles all my move-out cleans and the results are always inspection-ready. I've never had a tenant dispute a cleaning charge when SparkClean has done the work. Fast to book, reliable team, and honestly — the quality speaks for itself every time.",
    service: 'Move-Out Cleaning',
    date: 'September 2026',
  },
];

function StarRating({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? '#f5a623' : 'none'}
          stroke="#f5a623"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="testimonials">
      {/* Background */}
      <div className="testimonials__bg" aria-hidden="true" />

      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Don't take our word for it — hear from the homeowners, families, and businesses who trust SparkClean every day.
          </p>
        </div>

        {/* Summary row */}
        <div className="testimonials__summary animate-on-scroll">
          <div className="testimonials__summary-stat">
            <span className="testimonials__summary-num">4.9</span>
            <StarRating count={5} />
            <span className="testimonials__summary-label">Average Rating</span>
          </div>
          <div className="testimonials__summary-divider" aria-hidden="true" />
          <div className="testimonials__summary-stat">
            <span className="testimonials__summary-num">1,400+</span>
            <span className="testimonials__summary-label">Verified Reviews</span>
          </div>
          <div className="testimonials__summary-divider" aria-hidden="true" />
          <div className="testimonials__summary-stat">
            <span className="testimonials__summary-num">98%</span>
            <span className="testimonials__summary-label">Would Recommend</span>
          </div>
        </div>

        {/* Cards row */}
        <div className="testimonials__cards animate-on-scroll">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              className={`testimonial-card${i === active ? ' testimonial-card--active' : ''}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              aria-label={`Review by ${item.name}`}
            >
              <div className="testimonial-card__quote" aria-hidden="true">"</div>
              <StarRating count={item.rating} />
              <h4 className="testimonial-card__title">{item.title}</h4>
              <p className="testimonial-card__text">{item.review}</p>
              <div className="testimonial-card__footer">
                <div
                  className="testimonial-card__avatar"
                  style={{ background: item.avatarColor }}
                  aria-hidden="true"
                >
                  {item.avatar}
                </div>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{item.name}</span>
                  <span className="testimonial-card__role">{item.role}</span>
                </div>
                <span className="testimonial-card__service">{item.service}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="testimonials__nav animate-on-scroll" aria-label="Testimonial navigation">
          <button className="testimonials__nav-btn" onClick={prev} aria-label="Previous testimonial">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot${i === active ? ' testimonials__dot--active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === active}
              />
            ))}
          </div>
          <button className="testimonials__nav-btn" onClick={next} aria-label="Next testimonial">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
