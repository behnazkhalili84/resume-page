import React from 'react';
import { Collapse } from 'react-bootstrap';
import useToggle from '../hooks/useToggle';
import './Resume.css'; // Import the CSS file

const Education = () => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="section mb-4">
      <h2
        className="clickable"
        onClick={toggle}
      >
        Education
      </h2>
      <Collapse in={isOpen}>
        <div className="content">
          <p>
            <strong>Mobile Application Developement</strong><br />
            CEGEP - John Abbott College	<br />
            Graduate: Dec 2024<br />
            GPA: 3.8/4<br />
          </p>
          <p>
            <strong> Master's in Information Technology - Software Design and Development</strong><br />
            Shiraz University<br />
            Graduate: Dec 2014<br />
            GPA: 3.6/4<br />
          </p>
          <p>
            <strong> Bachelor's in Computer Engineering - Hardware</strong><br />
            Central Branch of Tehran Islamic Azad University	<br />
            Graduate: July 2008<br />
            GPA: 3.5/4<br />
          </p>
        </div>
      </Collapse>
    </div>
  );
};

export default Education;
