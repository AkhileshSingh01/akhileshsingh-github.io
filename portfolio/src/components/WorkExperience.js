import React from 'react';
import styles from './WorkExperience.module.css';

const workData = [
  {
    title: 'Software Engineer',
    company: 'Cassini Technologies B.V., The Hague, Netherlands',
    date: 'Oct 2022 – Feb 2025',
    details: [
      'Developed and implemented new software features and integrated them with hardware for real-time media applications.',
      'Collaborated with cross-functional teams, including R&D, QA/RA and business development, to enhance technology solutions.',
      'Participated in the testing and optimization of software systems and validation of hardware processes.',
      'Documentation and maintaining existing code base.',
    ],
    skills: 'C++, Agile, DICOM, Qt, Image Processing, UML, PostgreSQL, IEC 62304',
  },
  {
    title: 'Robotics Engineer',
    company: 'Aziobot B.V., Eindhoven, Netherlands',
    date: 'Feb 2022 – Aug 2022',
    details: [
      'Actively involved in Software and Electronics department, focusing on autonomous path planning and computer vision-based algorithm development.',
      'Developed volumetric video and AR solutions for immersive environments using CUDA and OpenCV.',
      'Supervised and mentored interns in projects, providing guidance on AI and robotics development.',
      'Worked on the implementation of next-gen AI-driven methods for AGV.',
    ],
    skills: 'C++, Python, CUDA, Tensorflow, NVIDIA Jetsons, Image Processing, SLAM, ROS',
  },
  {
    title: 'Robotics Intern',
    company: "Aziobot B.V., 's-Hertogenbosch, Netherlands",
    date: 'Aug 2020 – Dec 2020',
    details: [
      'Designed and developed human detection and pose estimation algorithms using Python and C++, integrated in the ROS environment.',
      'Worked on real-time media streaming and image processing projects involving RGBD video and volumetric representations.',
    ],
    skills: 'C++, Python, CUDA, Tensorflow, NVIDIA Jetsons, Image Processing, SLAM, ROS',
  },
  {
    title: 'Application Development Associate',
    company: 'Accenture, Bengaluru, India',
    date: 'Jan 2019 – Jun 2019',
    details: [
      'Managed client database and updated client application frameworks using C++.',
    ],
    skills: '',
  },
];

const WorkExperience = () => (
  <section className={styles.workExperience}>
    <h2>Work Experience</h2>
    <div className={styles.timeline}>
      {workData.map((work, idx) => (
        <div className={styles.timelineItem} key={idx}>
          <div className={styles.timelineDot} />
          {idx !== workData.length - 1 && <div className={styles.timelineLine} />}
          <div className={styles.timelineContent}>
            <h3>{work.title}</h3>
            <div className={styles.meta}><span>{work.company}</span> <span>{work.date}</span></div>
            {work.details.length === 1 ? (
              <div className={styles.singleTask}>{work.details[0]}</div>
            ) : (
              <ul className={styles.bulletList}>
                {work.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            )}
            {work.skills && <div className={styles.skills}><b>Skills:</b> {work.skills}</div>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExperience; 