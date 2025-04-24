import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
      if (window.innerWidth >= 950) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <li><a href="#about" onClick={() => isMobile && toggleMenu()}>About Us</a></li>
        <li><a href="#services" onClick={() => isMobile && toggleMenu()}>Services</a></li>
        <li><Link to="/contact" onClick={() => isMobile && toggleMenu()}>Contact</Link></li>
      </ul>

      {isMobile && (
        <>
          <div className={`menu-icon ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          
          {isMenuOpen && (
            <div className="close-icon" onClick={toggleMenu}>
              <span className="x-bar left"></span>
              <span className="x-bar right"></span>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Nav;