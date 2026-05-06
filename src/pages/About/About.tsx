import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initial: FormData = { name: '', email: '', message: '' };

const values = [
  { icon: '🌱', title: 'Beginner-First', desc: 'Every resource and recommendation is designed for someone brand new — no experience assumed.' },
  { icon: '🤝', title: 'Community-Driven', desc: 'Real hobbyists share what worked for them. Events and challenges keep you motivated.' },
  { icon: '♿', title: 'Accessible by Design', desc: 'High contrast, keyboard navigation, captioned tutorials — built so everyone can participate.' },
  { icon: '🎯', title: 'Personalized Matching', desc: 'Our hobby quiz matches you based on your lifestyle, budget, and personality.' },
  { icon: '💸', title: 'Budget Aware', desc: 'We surface hobbies at every price point so cost is never a barrier to starting.' },
  { icon: '📍', title: 'Locally Connected', desc: 'Find events, workshops, and stores near you. Offline community matters.' },
];

function About() {
  const [formData, setFormData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  function scrollToContact() {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function validate(): Partial<FormData> {
    const errs: Partial<FormData> = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email.';
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setFormData(initial);
  }

  return (
    <main>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.label}>Our Story</span>
          <h1>We built the platform we wished existed</h1>
          <p>Off Screen started with a simple observation: the internet makes it easy to consume content but surprisingly hard to actually do something. We are here to change that.</p>
          <div className={styles.heroButtons}>
            <Link to="/explore" className={styles.btnWhite}>Explore Hobbies</Link>
            <Link to="/quiz" className={styles.btnOutline}>Take the Quiz</Link>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
            alt="People doing hobbies"
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className={styles.missionInner}>
          <h2>Our Mission</h2>
          <p>Off Screen was built for anyone who has ever scrolled endlessly without finding something that truly excites them. We centralize hobby discovery, beginner resources, and community connections so getting started feels easy, not overwhelming.</p>
          <div className={styles.stats}>
            {[
              { num: '100+', label: 'Hobbies catalogued' },
              { num: '8', label: 'Hobby categories' },
              { num: 'Free', label: 'Always free to use' },
              { num: '2026', label: 'Founded' },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionInner}>
          <h2>What We Stand For</h2>
          <p>Six principles that guide every decision we make at Off Screen.</p>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImages}>
            <img src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=500&q=80" alt="Crafting" className={styles.storyImg1} />
            <img src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=500&q=80" alt="Pottery" className={styles.storyImg2} />
          </div>
          <div className={styles.storyText}>
            <span className={styles.label}>The Story</span>
            <h2>Why Off Screen exists</h2>
            <p>Screen time keeps climbing. The average person spends over 7 hours a day on screens and most of us know we would feel better doing something with our hands, our bodies, or our creative minds.</p>
            <p>But every time we search for hobbies to try, we get listicles without context, tutorials that assume prior knowledge, or products being sold to us. There was no honest, beginner-focused, community-driven place to just start.</p>
            <p>So we built one. Off Screen is that starting point — the place where you find your next thing, get everything you need to begin, and connect with others figuring it out alongside you.</p>
            <Link to="/explore" className={styles.btnTeal}>Start Exploring</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to get Off Screen?</h2>
        <p>Find your next hobby, connect with others, or test your knowledge with our quiz.</p>
        <div className={styles.ctaButtons}>
          <Link to="/explore" className={styles.btnWhite}>Explore Hobbies</Link>
          <Link to="/quiz" className={styles.btnOutlineCta}>Take the Quiz</Link>
          <button onClick={scrollToContact} className={styles.btnContact}>
            Contact Us
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} id="contact-section">
        <div className={styles.sectionInner}>
          <h2>Contact Us</h2>
          <p>Have a question, suggestion, or want to collaborate? We would love to hear from you.</p>

          {submitted ? (
            <div className={styles.success}>
              <span>✅</span>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. We will get back to you soon.</p>
              <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.inputError : ''}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.inputError : ''}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What is on your mind?"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? styles.inputError : ''}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Floating contact button — only on About page */}
        <button
          className={styles.floatingBtn}
          onClick={scrollToContact}
          aria-label="Contact us"
        >
          <span className={styles.floatingIcon}>✉️</span>
          <span className={styles.floatingLabel}>Contact Us</span>
        </button>
      </section>

    </main>
  );
}

export default About;