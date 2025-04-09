import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer dark">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} hari. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="https://github.com/arunhari09" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/hari-krishna-bommidi-2a7916300/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:orginalshowman@gmail.com" >
            <FaEnvelope /> Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
