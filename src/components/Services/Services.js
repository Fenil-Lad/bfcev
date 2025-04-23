import React, { useEffect } from 'react';
import './Services.css';

// Icon components
const icons = {
  ev: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M19 12h-1.79l-1.28-3.21A4.992 4.992 0 0010 5.5C7.57 5.5 6 7.07 6 9.5S7.57 13.5 10 13.5c1.2 0 2.3-.48 3.12-1.24l1.28 3.21H19V12zM10 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  ),
  battery: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M17 3H7c-1.1 0-1.99.89-1.99 1.99L5 19c0 1.1.89 1.99 1.99 1.99h10c1.1 0 1.99-.89 1.99-1.99V4c0-1.1-.89-1.99-1.99-1.99zm-4 12h-2v-3H9v3H7v-7h2v3h2V8h2v7h-2v-3h2v7z" />
    </svg>
  ),
  case: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M20 14h-2V8h2v6zm0 2v6H4v-6h16zm-2 2H6v-2h12v2z" />
    </svg>
  ),
  faq: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M12 3C6.48 3 2 7.48 2 12s4.48 9 10 9 10-4.48 10-9S17.52 3 12 3zm0 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-.5-6h-1v2h1v-2zm0-4h-1v3h1V7z" />
    </svg>
  ),
  route: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M12 4V1L8 5l4 4V6h4v4h-2V6h-2V4h4V1h-2z" />
    </svg>
  ),
  fleet: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M16 4v2H8V4H6v14h2v-2h8v2h2V4h-2zm-4 10H8v-2h4v2z" />
    </svg>
  ),
  logistics: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M6 13h12V5H6v8zm-2 4h16v-2H4v2zm2-10h12v-2H6v2z" />
    </svg>
  ),
  ai: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M10 20V10H7v10h3zm-2-3h1v2H8v-2zm7-7V4h-4v6H9l5 5 5-5h-4z" />
    </svg>
  ),
  cloud: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M18 16.39V15c0-3.87-3.13-7-7-7-2.12 0-4 1.03-5.23 2.61C5.04 10.09 4 9.14 4 8c0-1.1.9-2 2-2s2 .9 2 2c0 1.16.42 2.21 1.11 3.03C9.47 11.97 10.68 12 12 12c1.32 0 2.53-.03 3.89-.97C16.58 10.21 17 9.16 17 8c0-1.1-.9-2-2-2s-2 .9-2 2c0 1.14-.47 2.09-1.27 2.61C13.72 11.03 15 13 15 15c0 1.49-.57 2.83-1.52 3.89C13.96 19.28 14 19.64 14 20c0 1.1-.9 2-2 2s-2-.9-2-2c0-.36.04-.72.11-1.11C10.57 17.83 10 16.49 10 15c0-1.1.9-2 2-2s2 .9 2 2z" />
    </svg>
  ),
  security: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M12 2c5 0 9 4 9 9v4h-2v4H5v-4H3v-4c0-5 4-9 9-9zm0 2c-3.86 0-7 3.14-7 7v2h14v-2c0-3.86-3.14-7-7-7z" />
    </svg>
  ),
  software: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M3 6v12h18V6H3zm16 10H5V8h14v8z" />
    </svg>
  ),
};

const features = [
  { title: 'EV Fleet Solutions', icon: icons.ev, description: 'Comprehensive fleet solutions for your electric vehicle needs.' },
  { title: 'Battery & Charging Infrastructure', icon: icons.battery, description: 'Complete setup and management of charging stations and battery systems.' },
  { title: 'Case Studies', icon: icons.case, description: 'Explore real-world deployments showcasing our solutions in action.' },
  { title: 'FAQs', icon: icons.faq, description: 'Answers to common questions about our services and technology.' },
  { title: 'AI Route Optimization', icon: icons.route, description: 'Optimize routes with AI to save time and resources.' },
  { title: 'Smart Fleet Management', icon: icons.fleet, description: 'Monitor and manage your fleet with intelligent tools.' },
  { title: 'Predictive Logistics Analytics', icon: icons.logistics, description: 'Use predictive analytics for proactive decision-making in logistics.' },
  { title: 'Predictive Insights', icon: icons.ai, description: 'Gain actionable forecasts with our AI-powered insights platform.' },
  { title: 'AI & ML-Powered Analytics', icon: icons.ai, description: 'Leverage machine learning models for business intelligence.' },
  { title: 'Cloud & AI Solutions', icon: icons.cloud, description: 'Scalable cloud infrastructure enhanced with AI capabilities.' },
  { title: 'Cybersecurity', icon: icons.security, description: 'Protect your data and infrastructure with advanced security measures.' },
  { title: 'Custom Software Development', icon: icons.software, description: 'Tailored software solutions built to your business requirements.' },
];

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.glass-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
          else entry.target.classList.remove('visible');
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="electro-section">
      <h2 className="section-title">Our Services – Made for You</h2>
      <p className="section-subtitle">Explore our full range of cutting-edge solutions across EV, logistics, analytics, and IT.</p>
      <div className="features-container">
        {features.map((feature, i) => (
          <div key={i} className="glass-card">
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      {/* <div className="learn-more-container">
        <button className="learn-more-button">Learn More</button>
      </div> */}
    </section>
  );
};

export default Services;