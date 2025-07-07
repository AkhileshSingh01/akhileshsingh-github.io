import React from 'react';
import styles from './Education.module.css';

const educationData = [
  {
    institution: 'University of Twente, Enschede, Netherlands',
    degree: 'Master of Science, Electrical Engineering (Robotics and Mechatronics)',
    date: 'Aug 2019 – Jan 2022',
    courses: 'Machine Learning, Control System Design for Mechatronics, Systems Engineering, Speech Processing, Estimation of Dynamic Systems, Image Processing and Computer Vision, Advanced Pattern Recognition and Computer Vision, Modern Robotics, Real-time Software Development, Tele-interaction in Robotics',
  },
  {
    institution: 'Visvesvaraya Technological University, Belagavi, India',
    degree: 'Bachelor in Engineering, Electronics and Communication',
    date: 'Jul 2013 – Jun 2017',
    courses: 'Analog Circuits, Logic Design, Signal Processing, Microcontrollers, Microprocessors, Control Systems, CMOS VLSI, Information theory',
  },
  {
    institution: 'Govindram Seksaria Science College, Belagavi, India',
    degree: 'Pre–University',
    date: 'Jul 2011 – Jun 2013',
    courses: 'Physics, Chemistry, Math, Computer Science, English',
  },
];

const Education = () => (
  <section className={styles.education}>
    <h2>Education</h2>
    <div className={styles.timeline}>
      {educationData.map((edu, idx) => (
        <div className={styles.timelineItem} key={idx}>
          <div className={styles.timelineDot} />
          {idx !== educationData.length - 1 && <div className={styles.timelineLine} />}
          <div className={styles.timelineContent}>
            <h3>{edu.institution}</h3>
            <div className={styles.meta}><span>{edu.degree}</span> <span>{edu.date}</span></div>
            <div className={styles.courses}>{edu.courses}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education; 