import React, { useState } from 'react';
import './Contact.css'; // Make sure this has updated styling

const Contact = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consentTransactional, setConsentTransactional] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    // Optionally handle form submission here
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={consentTransactional}
                onChange={() => setConsentTransactional(!consentTransactional)}
              />
              By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={consentMarketing}
                onChange={() => setConsentMarketing(!consentMarketing)}
              />
              By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
