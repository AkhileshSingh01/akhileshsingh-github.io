import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 16 } }
};

function App() {
  const [theme, setTheme] = useState('light');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}> 
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 0 }}>
        <motion.svg
          width="100%"
          height="180"
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 40, damping: 18 }}
          style={{ display: 'block' }}
        >
          <motion.path
            d="M0,80 C360,180 1080,0 1440,100 L1440,0 L0,0 Z"
            fill="#e3f0ff"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>
      <Navbar onToggleTheme={handleToggleTheme} theme={theme} />
      <Header />
      <motion.section id="education" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Education /></motion.section>
      <motion.section id="work" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><WorkExperience /></motion.section>
      <motion.section id="projects" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Projects /></motion.section>
      <motion.section id="skills" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Skills /></motion.section>
      <motion.section id="languages" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Languages /></motion.section>
      <Footer />
    </div>
  );
}

export default App;
