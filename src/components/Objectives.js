import React from 'react';
import { Collapse } from 'react-bootstrap';
import useToggle from '../hooks/useToggle';
import './Resume.css'; // Import the CSS file

const Objectives = () => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="section mb-4">
      <h2
        className="clickable"
        onClick={toggle}
      >
        Objectives
      </h2>
      <Collapse in={isOpen}>
        <div className="content">
          <p>
          I am a dedicated and experienced software developer with a passion for creating innovative solutions and enhancing system efficiency. 
          I possess a strong understanding of computer systems analysis, design, testing, debugging, and maintenance techniques. Additionally
          , I am skilled in developing programs and crafting detailed program specifications.
          </p>
        </div>
      </Collapse>
    </div>
  );
};

export default Objectives;
