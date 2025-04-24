import React, { useEffect } from 'react';
import {
  BatteryCharging,
  FileText,
  HelpCircle,
} from 'lucide-react';

import './Services.css';

const features = [
  {
    title: 'EV Fleet Solutions',
    icon: <HelpCircle className="card-icon" />,
    description: 'Comprehensive fleet solutions for your electric vehicle needs.',
  },
  {
    title: 'Battery & Charging Infrastructure',
    icon: <BatteryCharging className="card-icon" />,
    description: 'Complete setup and management of charging stations and battery systems.',
  },
  {
    title: 'Case Studies',
    icon: <FileText className="card-icon" />,
    description: 'Explore real-world deployments showcasing our solutions in action.',
  },
  {
    title: 'FAQs',
    icon: <HelpCircle className="card-icon" />,
    description: 'Answers to common questions about our services and technology.',
  },
];

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.glass-card');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target); // 👈 Unobserve after triggering
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);


  return (
    <section className="electro-section" id='services'>
      <h2 className="section-title">Our Services – Made for You</h2>
      <p className="section-subtitle">
        Explore our full range of cutting-edge solutions across EV, logistics, analytics, and IT.
      </p>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="glass-card">
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
