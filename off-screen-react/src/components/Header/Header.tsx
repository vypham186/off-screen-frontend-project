import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoText}>Off Screen</Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <li>
          <NavLink to="/" end
            className={({ isActive }) => isActive ? styles.active : ''}
            onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore"
            className={({ isActive }) => isActive ? styles.active : ''}
            onClick={() => setMenuOpen(false)}>
            Explore Hobbies
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources"
            className={({ isActive }) => isActive ? styles.active : ''}
            onClick={() => setMenuOpen(false)}>
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/community"
            className={({ isActive }) => isActive ? styles.active : ''}
            onClick={() => setMenuOpen(false)}>
            Community
          </NavLink>
        </li>
        <li>
          <NavLink to="/about"
            className={({ isActive }) => isActive ? styles.active : ''}
            onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
      </ul>

      <div className={styles.authButtons}>
        <Link to="/quiz" className={styles.quizLink}>🎯 Hobby Quiz</Link>
        <Link to="/" className={styles.loginBtn}>Log In</Link>
        <Link to="/" className={styles.signupBtn}>Sign Up</Link>
      </div>
    </nav>
  );
}

export default Header;