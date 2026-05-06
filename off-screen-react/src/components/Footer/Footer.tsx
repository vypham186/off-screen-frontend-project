import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <img
            src={logo}
            alt="Off Screen Logo"
            style={{
              height: '48px',
              width: 'auto',
              marginBottom: '12px',
              display: 'block'
            }}
          />
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
          <Link to="/contact">Contact</Link>
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
