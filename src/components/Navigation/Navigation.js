import React, { useState } from 'react';
import './Navigation.css';  // CSS file for styling

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <div className="logo">
                <img src="/images/logo_1.png" alt="BFCEV Logo" />
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {/* Button outside the nav-links on large screens */}
            <div className="cta">
                <button>Get Started</button>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Navigation;
