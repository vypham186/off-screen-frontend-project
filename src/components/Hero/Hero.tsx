import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

function Hero() {
  const navigate = useNavigate();
  function handleContactClick() {
    navigate('/about');
    setTimeout(() => {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Step Off From Your Screen, Discover Hobbies You Could Love</h1>
          <p>Find simple, relaxing hobbies designed for beginners with limited time and experience.</p>
          <div className={styles.buttonGroup}>
            <Link to="/quiz" className={styles.btnPrimary}>Take the Hobby Quiz</Link>
            <Link to="/explore" className={styles.btnSecondary}>Explore Hobbies</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Why Finding a Hobby Online Feels Hard</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Scattered information" />
            <h3>Information is scattered</h3>
            <p>Information lives across many platforms with no clear starting point.</p>
          </div>
          <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80" alt="Tutorials" />
            <h3>Most tutorials assume experience</h3>
            <p>Beginner steps are skipped or explained too quickly.</p>
          </div>
          <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" alt="Choices" />
            <h3>Too many choices</h3>
            <p>Decision fatigue makes it hard to commit to just one hobby.</p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <h2>How Off Screen Helps You Get Started</h2>
        <div className={styles.iconGrid}>
          <div className={styles.iconItem}>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80" alt="Discover" />
            <p>Discover hobbies that match your interests</p>
          </div>
          <div className={styles.iconItem}>
            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&q=80" alt="Tutorials" />
            <p>Step-by-step beginner tutorials</p>
          </div>
          <div className={styles.iconItem}>
            <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=400&q=80" alt="Materials" />
            <p>Find materials and tools easily</p>
          </div>
          <div className={styles.iconItem}>
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80" alt="Community" />
            <p>Join a supportive hobby community</p>
          </div>
        </div>
      </section>

      <section className={styles.exploreBand}>
        <h2>Explore Beginner-Friendly Hobbies</h2>
        <Link to="/explore" className={styles.btnWhite}>Explore All Hobbies</Link>
      </section>

      <section className={styles.section}>
        <div className={styles.quizGrid}>
          <div className={styles.quizBox}>
            NOT SURE WHERE TO START?
          </div>
          <div className={styles.quizText}>
            <p>Take a quick quiz and discover hobbies that match your time, interests, and energy level.</p>
            <Link to="/quiz" className={styles.btnAmber}>Start Hobby Quiz</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Connect With Others Offline</h2>
        <p className={styles.subtext}>Share your progress, ask questions, and stay motivated.</p>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
          alt="Community"
          className={styles.communityImg}
        />
        <Link to="/community" className={styles.btnTeal}>Join the Community</Link>
      </section>

      <section className={styles.accessibility}>
        <p>
          <strong>Designed for Everyone:</strong> High contrast | Easy-to-read fonts | Captioned tutorials | Keyboard navigation
        </p>
      </section>
      <button
        className={styles.floatingBtn}
        onClick={handleContactClick}
        aria-label="Contact us"
      >
        <span className={styles.floatingIcon}>✉️</span>
        <span className={styles.floatingLabel}>Contact Us</span>
      </button>
    </main>
  );
}

export default Hero;