// src/components/HomePage.js
import React from 'react';
import './Home.css';  // Importing the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Your Future, Fully Charged</h1>
          <p>
            BFCEV Energy Solutions blends electric vehicle tech with AI-driven logistics to drive sustainability, performance, and innovation.
          </p>
          <div className="cta-buttons">
            <a href="#learn-more" className="cta-button">Learn More</a>
            <a href="#contact" className="cta-button">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
