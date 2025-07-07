import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = ({ onToggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    if (onToggleTheme) onToggleTheme();
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 12 }}
    >
      <div className={styles.logo}>Akhilesh</div>
      <ul className={menuOpen ? styles.menuOpen : ''}>
        <li><a href="#education">Education</a></li>
        <li><a href="#work">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#languages">Languages</a></li>
      </ul>
      <motion.button
        className={styles.themeToggle}
        onClick={handleToggle}
        aria-label="Toggle theme"
        whileTap={{ scale: 0.85, rotate: 20 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </motion.button>
      <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={styles.menuIcon}></span>
      </button>
    </motion.nav>
  );
};

export default Navbar; 