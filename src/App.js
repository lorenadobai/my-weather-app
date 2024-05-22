// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ChartPage from './pages/ChartPage';
import './App.css';
import logo from './images/logo.jpg'; // Import the logo

const App = () => (
  <Router>
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <nav>
            <ul className="nav-list">
              <li className="nav-item"><Link to="/">Home</Link></li>
              <li className="nav-item"><Link to="/about">About Us</Link></li>
              <li className="nav-item"><Link to="/chart">Chart</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Weather App. All rights reserved.</p>
      </footer>
    </div>
  </Router>
);

export default App;
