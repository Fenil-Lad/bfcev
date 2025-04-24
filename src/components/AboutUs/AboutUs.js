import React, { useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Store the current ref values in a variable that won't change
    const currentCardRefs = cardRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    currentCardRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      // Use the same ref values we stored at the start
      currentCardRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="about-us" id='about'>
      <h2>Our Vision, Your Future</h2>
      <p>
        We are committed to driving innovation through sustainability, performance, and smart technology.
      </p>
      <div className="about-cards">
        <div className="card" ref={(el) => (cardRefs.current[0] = el)}>
          <img src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg" alt="Sustainability" />
          <div className="card-content">
            <h3>Sustainability</h3>
            <p>Mindful tech for a greener future.</p>
          </div>
        </div>
        <div className="card" ref={(el) => (cardRefs.current[1] = el)}>
          <img src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg" alt="Innovation" />
          <div className="card-content">
            <h3>Innovation</h3>
            <p>AI solutions for seamless progress.</p>
          </div>
        </div>
        <div className="card" ref={(el) => (cardRefs.current[2] = el)}>
          <img src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg" alt="Performance" />
          <div className="card-content">
            <h3>Performance</h3>
            <p>Built for speed and growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;