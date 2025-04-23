import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import WhatsInItForYou from "./components/WhatsInItForYou/WhatsInItForYou";
import Services from "./components/Services/Services";
import PartnerSection from "./components/PartnerSection/PartnerSection";
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const showForm = location.pathname === "/contact";

  const closeContactForm = () => {
    navigate("/"); // Close modal by routing back to home
  };

  useEffect(() => {
    if (showForm) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showForm]);

  return (
    <main>
      <Nav />
      <Hero />
      <WhyChooseUs />
      <WhatsInItForYou />
      <Services />
      <PartnerSection />
      <Footer />

      {showForm && <Contact onClose={closeContactForm} />}
    </main>
  );
}
