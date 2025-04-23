// WhyChooseUs.jsx
import React from 'react';
import { Cpu, Globe } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => (
  <section className="why-choose-us" aria-labelledby="why-heading">
    <div className="content">
      <h2 id="why-heading" className="gradient-text">Why Choose Us</h2>
      <div className="cards">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/3747464/pexels-photo-3747464.jpeg"
            alt="Sustainable tech"
            className="card__image"
          />
          <Cpu size={48} className="icon" />
          <h3>Sustainable, Smart, Scalable Solutions</h3>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/33972/pexels-photo.jpg"
            alt="User-centric technology"
            className="card__image"
          />
          <Cpu size={48} className="icon" />
          <h3>Technology That Understands You</h3>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg"
            alt="Global network"
            className="card__image"
          />
          <Globe size={48} className="icon" />
          <h3>A Global Partner for a Greener Planet</h3>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;