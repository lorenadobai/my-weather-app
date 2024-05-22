// src/pages/AboutUsPage.js
import React from 'react';
import aboutImage from '../images/about.jpg';
const AboutUsPage = () => (
  <div>
    <h1>About Us</h1>
    <img src={aboutImage} alt="About Us" className="page-image" />
    <p>We are the team consisting of Lorena and Alin. We hope for a passing grade at IOTCA, with our little and simple weather station.</p>
  </div>
);

export default AboutUsPage;
