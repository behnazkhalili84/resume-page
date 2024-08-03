import React from 'react';
import { Collapse } from 'react-bootstrap';
import useToggle from '../hooks/useToggle';
import './Resume.css'; // Import the CSS file

const KeyQualifications = () => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="section mb-4">
      <h2
        className="clickable"
        onClick={toggle}
      >
        Key Qualifications
      </h2>
      <Collapse in={isOpen}>
        <div className="content">
          <ul>
            <li>Experience in software development, particularly in object-oriented programming and application design using Java and the Spring Framework.</li>
            <li>Skills in developing mobile and web applications using PHP,Java, Node.js, HTML, CSS, JavaScript, SwiftUI, and Android with Kotlin and Java,Xcode,Intellij IDEA,API.</li>
            <li>Strong understanding of software development lifecycle, from requirements gathering to deployment and maintenance.</li>
            <li>Experienced in using version control systems like Git for managing code and collaborating with team members.</li>
            <li>Experience in working with no-sql DB sucha as Firebase and MongoDB</li>
            <li>Strong experience in working with relational databases and SQL concepts</li>
            <li>Skilled in debugging, troubleshooting, and optimizing code to enhance performance and reliability.</li>
            <li>Capable of creating responsive and user-friendly interfaces with a focus on clean and maintainable code.</li>
            <li>In a fast-paced environment where working under pressure is the norm, I maintain exceptional attention to detail to ensure high-quality outcomes.</li>
            <li>Demonstrating accurate and efficient interpersonal skills, I excel as a team player, consistently upholding integrity and accountability in all my professional interactions</li>
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default KeyQualifications;
