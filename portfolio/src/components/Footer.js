import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <span>&copy; {new Date().getFullYear()} Akhilesh Singh Naurathae</span>
    <span className={styles.contact}>
      | <a href="mailto:akhileshsinghmn95@gmail.com">akhileshsinghmn95@gmail.com</a>
    </span>
  </footer>
);

export default Footer; 