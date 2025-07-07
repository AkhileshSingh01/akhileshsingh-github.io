import React from 'react';
import styles from './Languages.module.css';

const Languages = () => (
  <section className={styles.languagesSection}>
    <h2>Languages Known</h2>
    <ul>
      <li><b>English</b> (Proficient)</li>
      <li><b>Hindi</b> (Proficient)</li>
      <li><b>Dutch</b> (A1 proficiency)</li>
    </ul>
  </section>
);

export default Languages; 