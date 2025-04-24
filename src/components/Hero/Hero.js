import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="video-wrapper">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="/video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <section className="hero-section">
          {/* Optional logo */}
          {/* <img src="static/logo_tran.png" alt="Logo" className="hero-logo" /> */}

          <h1>Your Future, Fully Charged</h1>

          <p className="hero-subtitle">
            Driving sustainability and performance with EV tech and AI logistics.
          </p>

          {/* You can wrap buttons in a div to space them properly */}
          <div className="hero-buttons-container">
            <button className="hero-button" id='learn-more-btn'>Learn more</button>
            <button className="hero-button" id='contact-btn' onClick={() => navigate('/contact')}>Contact us</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
