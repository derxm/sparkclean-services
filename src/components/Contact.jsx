import { useState } from 'react';
import './Contact.css';

const serviceOptions = [
  'Residential Cleaning',
  'Office Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Post-Construction Cleaning',
  'Carpet & Upholstery Cleaning',
  'Other',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    if (!form.service) e.service = 'Please select a service.';
    if (!form.date) e.date = 'Please choose a preferred date.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1200);
  };

  // Get tomorrow's date as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section id="contact" className="contact">
      <div className="contact__bg-deco" aria-hidden="true" />
      <div className="container contact__inner">
        {/* Info column */}
        <div className="contact__info animate-on-scroll">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Ready for a<br />Sparkling Clean?
          </h2>
          <div className="section-divider" style={{ margin: '0 0 24px', background: 'linear-gradient(90deg, var(--green-light), #7dd9a8)' }} />
          <p className="contact__lead">
            Book online in under 2 minutes. Tell us about your space and we'll take it from there — professionally, reliably, and on your schedule.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon" aria-hidden="true">📞</div>
              <div>
                <div className="contact__detail-label">Call Us</div>
                <a href="tel:+2348012345678" className="contact__detail-value">+234 801 234 5678</a>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon" aria-hidden="true">✉️</div>
              <div>
                <div className="contact__detail-label">Email Us</div>
                <a href="mailto:hello@sparkclean.com" className="contact__detail-value">hello@sparkclean.com</a>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon" aria-hidden="true">🕐</div>
              <div>
                <div className="contact__detail-label">Hours</div>
                <div className="contact__detail-value">Mon–Sat: 7am – 8pm</div>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon" aria-hidden="true">📍</div>
              <div>
                <div className="contact__detail-label">Service Area</div>
                <div className="contact__detail-value">Tanke &amp; surrounding areas</div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="contact__trust">
            <div className="contact__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7dd9a8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              Free, no-obligation quote
            </div>
            <div className="contact__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7dd9a8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              Reply within 2 hours
            </div>
            <div className="contact__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7dd9a8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              100% satisfaction focus
            </div>
          </div>
        </div>

        {/* Form column */}
        <div className="contact__form-wrap animate-on-scroll animate-delay-2">
          {submitted ? (
            <div className="contact__success" role="alert">
              <div className="contact__success-icon" aria-hidden="true">✅</div>
              <h3 className="contact__success-title">Booking Request Sent!</h3>
              <p className="contact__success-text">
                Thank you! We've received your request and will be in touch within 2 hours to confirm your booking.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Booking request form"
            >
              <h3 className="contact__form-title">Book a Cleaning</h3>
              <p className="contact__form-sub">Fill in the details below and we'll get back to you within 2 hours.</p>

              <div className="form-row">
                <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                  <label htmlFor="name" className="form-label">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                </div>
                <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                  <label htmlFor="email" className="form-label">Email Address <span aria-hidden="true">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group${errors.phone ? ' form-group--error' : ''}`}>
                  <label htmlFor="phone" className="form-label">Phone Number <span aria-hidden="true">*</span></label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+234 800 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    aria-required="true"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && <span id="phone-error" className="form-error" role="alert">{errors.phone}</span>}
                </div>
                <div className={`form-group${errors.date ? ' form-group--error' : ''}`}>
                  <label htmlFor="date" className="form-label">Preferred Date <span aria-hidden="true">*</span></label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="form-input"
                    min={minDate}
                    value={form.date}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.date ? 'date-error' : undefined}
                  />
                  {errors.date && <span id="date-error" className="form-error" role="alert">{errors.date}</span>}
                </div>
              </div>

              <div className={`form-group${errors.service ? ' form-group--error' : ''}`}>
                <label htmlFor="service" className="form-label">Service Type <span aria-hidden="true">*</span></label>
                <select
                  id="service"
                  name="service"
                  className="form-input form-select"
                  value={form.service}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <span id="service-error" className="form-error" role="alert">{errors.service}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Additional Notes <span className="form-label-optional">(optional)</span></label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell us about your space — size, any special requirements, access instructions..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg contact__submit"
                disabled={submitting}
                aria-busy={submitting}
              >
                {submitting ? (
                  <>
                    <span className="contact__spinner" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Booking Request
                  </>
                )}
              </button>

              <p className="contact__form-privacy">
                🔒 Your information is safe with us. We never share your data.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
