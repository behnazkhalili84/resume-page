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
        Skills
      </h2>
      <Collapse in={isOpen}>
        <div className="content">
        <p>
            <strong>Frontend Develpoement</strong>
            <br />
            - Html/Css<br/>
            - JavaScrip<br/>
            - React <br/>
         </p>
         <p>
            <strong>Backend Develpoement</strong>
            <br />
            - Delphi <br/>
            - Java <br/>
            - PHP <br/>
            - C# <br/>
            - SQL Server <br/>
            - IBM DB2
         </p>
        <p>
            <strong>Mobile developement</strong>
            <br />
            - IOS using Swift UI<br />
            - Android using Java and Kotlin <br />
            - Multiplatform application using Kotlin multiplatform,React Native,Flutter<br/>
         </p>
         <p>
            <strong>Using Tools</strong>
            <br />
            - Word Press for web developement<br />
            - Jira <br />
            - GitHub<br/>
            - Trello <br/>
         </p>
       
         
        </div>
      </Collapse>
    </div>
  );
};

export default Experience;
