import React from 'react';
import styles from './WorkExperience.module.css';

const WorkExperience = () => (
  <section className={styles.workExperience}>
    <h2>Work Experience</h2>
    <div className={styles.entry}>
      <h3>Software Engineer</h3>
      <div className={styles.meta}><span>Cassini Technologies B.V., The Hague, Netherlands</span> <span>Oct 2022 – Feb 2025</span></div>
      <ul>
        <li>Developed and implemented new software features and integrated them with hardware for real-time media applications.</li>
        <li>Collaborated with cross-functional teams, including R&D, QA/RA and business development, to enhance technology solutions.</li>
        <li>Participated in the testing and optimization of software systems and validation of hardware processes.</li>
        <li>Documentation and maintaining existing code base.</li>
      </ul>
      <div className={styles.skills}><b>Skills:</b> C++, Agile, DICOM, Qt, Image Processing, UML, PostgreSQL, IEC 62304</div>
    </div>
    <div className={styles.entry}>
      <h3>Robotics Engineer</h3>
      <div className={styles.meta}><span>Aziobot B.V., Eindhoven, Netherlands</span> <span>Feb 2022 – Aug 2022</span></div>
      <ul>
        <li>Actively involved in Software and Electronics department, focusing on autonomous path planning and computer vision-based algorithm development.</li>
        <li>Developed volumetric video and AR solutions for immersive environments using CUDA and OpenCV.</li>
        <li>Supervised and mentored interns in projects, providing guidance on AI and robotics development.</li>
        <li>Worked on the implementation of next-gen AI-driven methods for AGV.</li>
      </ul>
      <div className={styles.skills}><b>Skills:</b> C++, Python, CUDA, Tensorflow, NVIDIA Jetsons, Image Processing, SLAM, ROS</div>
    </div>
    <div className={styles.entry}>
      <h3>Robotics Intern</h3>
      <div className={styles.meta}><span>Aziobot B.V., 's-Hertogenbosch, Netherlands</span> <span>Aug 2020 – Dec 2020</span></div>
      <ul>
        <li>Designed and developed human detection and pose estimation algorithms using Python and C++, integrated in the ROS environment.</li>
        <li>Worked on real-time media streaming and image processing projects involving RGBD video and volumetric representations.</li>
      </ul>
      <div className={styles.skills}><b>Skills:</b> C++, Python, CUDA, Tensorflow, NVIDIA Jetsons, Image Processing, SLAM, ROS</div>
    </div>
    <div className={styles.entry}>
      <h3>Application Development Associate</h3>
      <div className={styles.meta}><span>Accenture, Bengaluru, India</span> <span>Jan 2019 – Jun 2019</span></div>
      <ul>
        <li>Managed client database and updated client application frameworks using C++.</li>
        <li>Assisted in the development of IoT applications using embedded systems and sensor interfaces.</li>
      </ul>
    </div>
  </section>
);

export default WorkExperience; 