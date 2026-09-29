import { useState } from 'react';
import './Pricing.css';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Great for regular upkeep',
    monthlyPrice: 89,
    oneTimePrice: 109,
    color: '#2a6496',
    badge: null,
    features: [
      { text: 'Up to 2 bedrooms', included: true },
      { text: '1 bathroom deep clean', included: true },
      { text: 'Kitchen surfaces & sink', included: true },
      { text: 'Vacuuming & mopping', included: true },
      { text: 'Dusting all surfaces', included: true },
      { text: 'Inside oven cleaning', included: false },
      { text: 'Inside fridge cleaning', included: false },
      { text: 'Window interior cleaning', included: false },
      { text: 'Priority scheduling', included: false },
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Our most popular package',
    monthlyPrice: 139,
    oneTimePrice: 169,
    color: '#2e7d52',
    badge: 'Most Popular',
    features: [
      { text: 'Up to 4 bedrooms', included: true },
      { text: '2 bathroom deep cleans', included: true },
      { text: 'Full kitchen clean', included: true },
      { text: 'Vacuuming & mopping', included: true },
      { text: 'Dusting all surfaces', included: true },
      { text: 'Inside oven cleaning', included: true },
      { text: 'Inside fridge cleaning', included: true },
      { text: 'Window interior cleaning', included: false },
      { text: 'Priority scheduling', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'The complete white-glove experience',
    monthlyPrice: 199,
    oneTimePrice: 249,
    color: '#7a3090',
    badge: 'Best Value',
    features: [
      { text: 'Unlimited bedrooms', included: true },
      { text: 'All bathrooms deep clean', included: true },
      { text: 'Full kitchen clean', included: true },
      { text: 'Vacuuming & mopping', included: true },
      { text: 'Dusting all surfaces', included: true },
      { text: 'Inside oven cleaning', included: true },
      { text: 'Inside fridge cleaning', included: true },
      { text: 'Window interior cleaning', included: true },
      { text: 'Priority scheduling', included: true },
    ],
  },
];

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleBook = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-title">Simple, Honest Pricing</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            No hidden fees, no surprises. Choose the plan that fits your home and budget. All plans include our satisfaction focus.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="pricing__toggle animate-on-scroll" role="group" aria-label="Billing frequency">
          <button
            className={`pricing__toggle-btn${isMonthly ? ' pricing__toggle-btn--active' : ''}`}
            onClick={() => setIsMonthly(true)}
            aria-pressed={isMonthly}
          >
            Monthly Plan
          </button>
          <button
            className={`pricing__toggle-btn${!isMonthly ? ' pricing__toggle-btn--active' : ''}`}
            onClick={() => setIsMonthly(false)}
            aria-pressed={!isMonthly}
          >
            One-Time Clean
          </button>
          {isMonthly && (
            <span className="pricing__toggle-save" aria-live="polite">Save 20%</span>
          )}
        </div>

        {/* Plans grid */}
        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`pricing-card animate-on-scroll animate-delay-${i + 1}${plan.id === 'standard' ? ' pricing-card--featured' : ''}`}
            >
              {plan.badge && (
                <div className="pricing-card__badge" style={{ background: plan.color }}>
                  {plan.badge}
                </div>
              )}

              <div className="pricing-card__header" style={{ '--plan-color': plan.color }}>
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__tagline">{plan.tagline}</p>
                <div className="pricing-card__price">
                  <span className="pricing-card__currency">$</span>
                  <span className="pricing-card__amount">
                    {isMonthly ? plan.monthlyPrice : plan.oneTimePrice}
                  </span>
                  <span className="pricing-card__period">
                    {isMonthly ? '/mo' : '/clean'}
                  </span>
                </div>
              </div>

              <ul className="pricing-card__features">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`pricing-card__feature${!f.included ? ' pricing-card__feature--excluded' : ''}`}
                  >
                    {f.included ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={plan.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>

              <button
                className="pricing-card__cta btn btn-lg"
                style={
                  plan.id === 'standard'
                    ? { background: plan.color, color: 'white' }
                    : { borderColor: plan.color, color: plan.color }
                }
                onClick={handleBook}
              >
                {plan.id === 'standard' ? 'Get Started' : 'Choose Plan'}
              </button>

              <p className="pricing-card__note">
                No contracts · Cancel anytime
              </p>
            </div>
          ))}
        </div>

        <p className="pricing__disclaimer animate-on-scroll">
          All prices are estimates for standard homes. Final quote provided after a free assessment. Commercial properties and specialty cleans may vary.
        </p>
      </div>
    </section>
  );
}
