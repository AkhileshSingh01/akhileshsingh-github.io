import React from 'react';
import styles from './Skills.module.css';

const Skills = () => (
  <section className={styles.skillsSection}>
    <h2>Skills</h2>
    <div className={styles.skillsGrid}>
      <div>
        <h3>Professional Skills</h3>
        <ul>
          <li>MATLAB</li>
          <li>Python</li>
          <li>C++</li>
          <li>ROS</li>
          <li>GIT</li>
          <li>XML</li>
          <li>UML</li>
          <li>Agile</li>
          <li>Git</li>
          <li>CI/CD</li>
        </ul>
      </div>
      <div>
        <h3>Technical Skills</h3>
        <ul>
          <li>Computer Vision and Image Processing</li>
          <li>Machine Learning</li>
          <li>SLAM</li>
          <li>Human-robot Interaction</li>
          <li>Linear algebra</li>
          <li>3D geometry</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills; 