import React from 'react';
import styles from './Education.module.css';

const Education = () => (
  <section className={styles.education}>
    <h2>Education</h2>
    <div className={styles.entry}>
      <h3>University of Twente, Enschede, Netherlands</h3>
      <div className={styles.meta}><span>Master of Science, Electrical Engineering (Robotics and Mechatronics)</span> <span>Aug 2019 – Jan 2022</span></div>
      <ul>
        <li>Machine Learning, Control System Design for Mechatronics, Systems Engineering, Speech Processing</li>
        <li>Estimation of Dynamic Systems, Image Processing and Computer Vision, Advanced Pattern Recognition and Computer Vision</li>
        <li>Modern Robotics, Real-time Software Development, Tele-interaction in Robotics</li>
      </ul>
    </div>
    <div className={styles.entry}>
      <h3>Visvesvaraya Technological University, Belagavi, India</h3>
      <div className={styles.meta}><span>Bachelor in Engineering, Electronics and Communication</span> <span>Jul 2013 – Jun 2017</span></div>
      <ul>
        <li>Analog Circuits, Logic Design, Signal Processing, Microcontrollers, Microprocessors, Control Systems</li>
        <li>CMOS VLSI, Information theory</li>
      </ul>
    </div>
    <div className={styles.entry}>
      <h3>Govindram Seksaria Science College, Belagavi, India</h3>
      <div className={styles.meta}><span>Pre–University</span> <span>Jul 2011 – Jun 2013</span></div>
      <ul>
        <li>Physics, Chemistry, Math, Computer Science, English</li>
      </ul>
    </div>
  </section>
);

export default Education; 