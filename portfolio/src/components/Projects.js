import React from 'react';
import styles from './Projects.module.css';

const Projects = () => (
  <section className={styles.projects}>
    <h2>Projects</h2>
    <div className={styles.entry}>
      <h3>Model–Mediated Teleoperation Of a Flexible Object With A Gripper-Mounted Telerobot (Master Thesis)</h3>
      <div className={styles.meta}><span>Apr 2021 – Jan 2022</span> <a href="#">link:Thesis</a></div>
      <ul>
        <li>Developed predictive algorithms for flexible 3D object modeling, sensor integration, and bilateral teleoperation.</li>
        <li>Hands-on experience in tele-interaction and control systems relevant to haptic feedback.</li>
        <li>Hands-on experience on C++, python and ROS</li>
      </ul>
    </div>
    <div className={styles.entry}>
      <h3>Lip reading from Video</h3>
      <div className={styles.meta}><span>Apr 2020 – Jun 2020</span></div>
      <ul>
        <li>Implemented a machine learning model using CNN and LSTM to predict words from video without audio.</li>
        <li>Developed a preprocessing pipeline for lip segmentation, pixel normalization, and data redundancy reduction.</li>
        <li>Hands-on experience on python libraries like OpenCV, Cuda, Keras and Tensorflow.</li>
      </ul>
    </div>
    <div className={styles.entry}>
      <h3>Emotion Recognition using MFCC features and Machine Learning</h3>
      <div className={styles.meta}><span>Nov 2019 – Jan 2020</span></div>
      <ul>
        <li>Designed and trained ML models (SVM, Decision Tree, RCNN) to predict emotions from speech signals.</li>
        <li>Pre-processed the speech signals to extract MFCC features to classify emotions.</li>
        <li>Hands-on experience on python libraries like tensorflow and keras.</li>
      </ul>
    </div>
    <div className={styles.entry}>
      <h3>Determining an effective Machine Learning Model for heart disease prediction</h3>
      <div className={styles.meta}><span>Nov 2019 – Jan 2020</span></div>
      <ul>
        <li>Developed multiple ML models to determine the most efficient model for heart disease prediction using Kaggle datasets.</li>
        <li>Experience in evaluating ML model performance based on performance specific measures.</li>
      </ul>
    </div>
  </section>
);

export default Projects; 