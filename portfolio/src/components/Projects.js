import React from 'react';
import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'Model–Mediated Teleoperation Of a Flexible Object With A Gripper-Mounted Telerobot (Master Thesis)',
    date: 'Apr 2021 – Jan 2022',
    link: '',
    desc: 'Developed predictive algorithms and teleoperation systems for flexible 3D object modeling and haptic feedback in robotics.',
    skills: 'C++, Python, ROS',
  },
  {
    title: 'Lip reading from Video',
    date: 'Apr 2020 – Jun 2020',
    link: '',
    desc: 'Built a deep learning pipeline using CNN and LSTM to predict words from video without audio.',
    skills: 'OpenCV, CUDA, Keras, Tensorflow',
  },
  {
    title: 'Emotion Recognition using MFCC features and Machine Learning',
    date: 'Nov 2019 – Jan 2020',
    link: '',
    desc: 'Designed and trained ML models (SVM, Decision Tree, RCNN) to classify emotions from speech signals using MFCC features.',
    skills: 'Tensorflow, Keras',
  },
  {
    title: 'Determining an effective Machine Learning Model for heart disease prediction',
    date: 'Nov 2019 – Jan 2020',
    link: '',
    desc: 'Evaluated and compared multiple ML models for heart disease prediction using Kaggle datasets, focusing on performance metrics and model selection.',
    skills: 'Python, ML, Kaggle',
  },
];

const Projects = () => (
  <section className={styles.projects}>
    <h2>Projects</h2>
    <div className={styles.timeline}>
      {projectsData.map((proj, idx) => (
        <div className={styles.timelineItem} key={idx}>
          <div className={styles.timelineDot} />
          {idx !== projectsData.length - 1 && <div className={styles.timelineLine} />}
          <div className={styles.timelineContent}>
            <h3>{proj.title}</h3>
            <div className={styles.meta}><span>{proj.date}</span></div>
            <p className={styles.desc}>{proj.desc}</p>
            <ul className={styles.bulletList}>
              <li>{proj.skills}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 