import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.nameSection}>
      <h1 className={styles.name}>Akhilesh Singh Naurathae</h1>
      <span className={styles.title}>Software Engineer | Robotics Engineer</span>
    </div>
    <div className={styles.contactSection}>
      <span>Eindhoven, Netherlands</span>
      <span>|</span>
      <span>+31-639779900</span>
      <span>|</span>
      <span>akhileshsinghmn95@gmail.com</span>
      <span>|</span>
      <a href="https://www.linkedin.com/in/akhileshsinghmn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <div className={styles.metaSection}>
      <span>Gender: Male</span>
      <span>|</span>
      <span>DOB: 29-06-1995</span>
    </div>
  </header>
);

export default Header; 