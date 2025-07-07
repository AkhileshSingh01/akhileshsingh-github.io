import React from 'react';
import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
