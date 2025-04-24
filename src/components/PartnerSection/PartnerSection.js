import React from 'react';
import './PartnerSection.css';
import { useNavigate } from 'react-router-dom';

const PartnerSection = () => {

  const navigate = useNavigate();
  return (
    <section className="partner-section">
      <div className="partner-content">
        <h2 className="partner-title">Take the next step.</h2>
        <p className="partner-description">
          Transparency. Growth. Sustainability. Everything investors look for in the future of business.
        </p>
        <button className="partner-button" onClick={() => navigate('/contact')}>
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default PartnerSection;
