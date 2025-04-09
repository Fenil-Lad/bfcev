import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing Instagram and LinkedIn icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; 2025 <a href="https://scalable.ltd/" target="_blank" rel="noopener noreferrer">Scalable</a>. All Rights Reserved.
        </p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
