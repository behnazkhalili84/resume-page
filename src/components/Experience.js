import React from 'react';
import { Collapse } from 'react-bootstrap';
import useToggle from '../hooks/useToggle';
import './Resume.css'; // Import the CSS file

const Experience = () => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="section mb-4">
      <h2
        className="clickable"
        onClick={toggle}
      >
        Experience
      </h2>
      <Collapse in={isOpen}>
        <div className="content">
        <p>
            <strong>Freelance Mobile and Web Developer</strong>
            <span className="date-range">Feburary 2024 - Present</span>
            <br />
            <em>Self-Employed</em><br />
            - Developed and maintained custom mobile and web applications for various clients, focusing on user-centric design and functionality.<br />
            - Created cross-platform mobile apps using React Native and Flutter, ensuring seamless performance on both iOS and Android devices. <br />
            - Integrated APIs and third-party services for enhanced application functionality, including payment gateways, social media integrations, and geolocation services.<br/>
            - Conducted client consultations to gather requirements, provided technical advice, and delivered tailored solutions that met their business needs. <br/>
            - Utilized version control systems like Git for efficient collaboration and code management.
         </p>
        <p>
            <strong>Application Developer</strong>
            <span className="date-range">August 2012- December 2014</span>
            <br />
            <em>Yaas Arghavani Industrial Engineering</em><br />
            - Analyzed requirements and designed, developed, and implemented software applications.<br />
            - Designed and implemented object-oriented architectures and application design using Java. <br />
            - Implimenting functional business for banking industry using SQL and BD2.<br/>
            - Maintain and improve existing computer programs by making modifications as required. <br/>
         </p>
         <p>
            <strong>Freelance Mobile and Web Developer</strong>
            <span className="date-range">March 2024 - Present</span>
            <br />
            <em>Self-Employed</em><br />
            - Windows application programming using C#<br />
            - Development, testing, debugging, and documentation of solutions to business problems using SQL Server <br />
            - Reporting analytics and statistics <br/>
            - Communicate technical problems, processes and solutions <br/>
         </p>
         <p>
            <strong>Technical Support Specialist</strong>
            <span className="date-range">August 2008 - July 2012</span>
            <br />
            <em>Mellat Bank</em><br />
            - Provided production support, debugging, and database management.<br />
            - Participated in the improvement and automation of internal processes and development tools. <br />
            - Collaborated with a team of software developers, architects, analysts, and quality assurance specialists.<br/>
         </p>
        </div>
      </Collapse>
    </div>
  );
};

export default Experience;
