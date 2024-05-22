// src/pages/HomePage.js
import React from 'react';
import homeImage from '../images/home.jpg';

const HomePage = () => (
  <div>
    <h1>Welcome to My Weather App</h1>
    <img src={homeImage} alt="Home" className="page-image" />
    <p>IOTCA project for monitoring temperature and humidity data in real-time, using RaspberryPi with a temperature and humidity sensor, where the lightbulb is on in different intervals considering the levels of temperature.We have it conected to our firebase where the data for charts is going to come.</p>
  </div>
);

export default HomePage;
