import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''} ${isScrollingDown ? 'hide' : ''}`}>
      <div className="logo">
        <a href="/">
          <img
            src="/static/logo_1_tran_white.svg"
            alt="BFCEV_Logo"
            className="logo-image"
          />
        </a>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/about" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>About Us</a></li>
        <li><a href="/services" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Services</a></li>
        <li><Link to="/contact" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Contact</Link></li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* X button to close the menu */}
      {isMenuOpen && (
        <div className="close-icon" onClick={toggleMenu}>
          <span className="x-bar"></span>
          <span className="x-bar"></span>
        </div>
      )}
    </nav>
  );
};

export default Nav;
