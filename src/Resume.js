import React from 'react';
import NameAndAddress from './components/NameAndAddress';
import Objectives from './components/Objectives';
import Experience from './components/Experience';
import Education from './components/Education';
import KeyQualifications from './components/KeyQualifications';
import Skills from './components/Skills';

// Main component for the Resume page
const Resume = () => {
  return (
    <div className="container mt-5">
      <NameAndAddress />
      <hr className="my-4" />

      <Objectives />
      <KeyQualifications/>
      <Skills/>
      <Experience />
      <Education />
    </div>
  );
};

export default Resume;
