import React from 'react';
import './Resume.css'; // Import the CSS file

const NameAndAddress = () => {
  return (
    <div className="name-address mb-4">
      <h1 className="name">Behnaz Khalili</h1>
      <p className="address">
        Montreal, Canada<br />
        Email: <a href="mailto:behnazkhalili84@gmail.com">behnazkhalili84@gmail.com</a><br />
        Phone: 514-452-3389<br />
        LinkedIn: <a href="https://www.linkedin.com/in/behnaz-khalili-b6309a19a" target="_blank" rel="noopener noreferrer">linkedin.com/in/behnaz-khalili-b6309a19a</a><br />
        GitHub: <a href="https://github.com/Behnazkhalili84" target="_blank" rel="noopener noreferrer">github.com/Behnazkhalili84</a>
      </p>
    </div>
  );
};

export default NameAndAddress;
