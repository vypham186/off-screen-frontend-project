import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h3>Off Screen</h3>
          <p>Making your time away from screens more meaningful, one hobby at a time.</p>
        </div>
        <div>
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore Hobbies</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/community">Community</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#">Accessibility</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
        </div>
        <div>
          <h4>Play</h4>
          <Link to="/quiz">🎯 Hobby Quiz</Link>
        </div>
      </div>
      <p className={styles.bottom}>
        © 2026 All Rights Reserved | Unplug Corporation Pvt. Ltd.
      </p>
    </footer>
  );
}

export default Footer;