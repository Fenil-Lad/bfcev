import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <a href="/" className="footer-logo-link">
            <img src="/static/logo_1_tran.png" alt="Electrovolt Logo" className="footer-logo-img" />
          </a>
        </div>

        {/* Nav Links */}
        <div className="footer-links">
          <ul className="footer-links-list">
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><Link to="/contact" className="footer-link" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <div className="contact-item">
            <svg viewBox="0 0 24 24" className="contact-icon">
              <path fill="currentColor" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
            </svg>
            <a href="https://maps.google.com/?q=Valsad, Gujarat" className="contact-link" target="_blank" rel="noopener noreferrer">
              Valsad, Gujarat
            </a>
          </div>

          {/* <div className="contact-item">
            <svg viewBox="0 0 24 24" className="contact-icon">
              <path fill="currentColor" d="M6.6 10.8C8.2 13.9 10.9 16.6 14 18.2l2.1-2.1c.3-.3.8-.4 1.2-.2 1 .4 2.1.6 3.2.6.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.8 21.2 2.8 13.2 2.8 3.2 2.8 2.5 3.3 2 4 2h2.5c.7 0 1.2.5 1.2 1.2 0 1.1.2 2.2.6 3.2.1.4 0 .9-.3 1.2L6.6 10.8z" />
            </svg>
            <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a>
          </div> */}

          <div className="contact-item">
            <svg viewBox="0 0 24 24" className="contact-icon">
              <path fill="currentColor" d="M4 4h16c1.1 0 2 .9 2 2v1.5l-10 6-10-6V6c0-1.1.9-2 2-2zm0 4.5l10 6 10-6V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8.5z" />
            </svg>
            <a href="mailto:purchase_hub@electrovolt.in" className="contact-link">info_hub@bfcev.com</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social-media">
          <a href="https://facebook.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>

        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()}. Powered, designed and developed by <a href="https://scalable.ltd/" target="_blank" rel="noopener noreferrer" className="scalable-link">Scalable</a>. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
