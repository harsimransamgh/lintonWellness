// Import necessary dependencies and styles
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './services.css'; // Make sure to import your styles
import logo from './logo rectangle.png';

// Define the Services component
const Services = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <button className="free-trial-button2">Free Trial</button>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/audienceinteraction">Audience Interaction</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/aboutus">Aboutus</Link> {/* Use the correct path for signup */}
          </li>
        </ul>
      </div>

      <div className="services-container">
        <h3 className="services-heading">Calm. Happy. Mindful.</h3>
        <p className="services-subheading">Discover our online classes and workshops</p>

        <div className="service1">
          <h4>Service 1</h4>
          <p>
            Days: Mon - Fri<br />
            Time: 45 min<br />
            Price: $9
          </p>
          <button className="book-now-button">Book Now</button>
        </div>

        <div className="service2">
          <h4>Service 2</h4>
          <p>
            Days: Mon - Fri<br />
            Time: 1 hr<br />
            Price: $10
          </p>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
