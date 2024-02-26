import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from './logo rectangle.png';
import anotherImage from './Image.jpeg'; // Replace with the actual file name and extension


const Home = () => {
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
            <Link to="/signup">Sign Up</Link> {/* Use the correct path for signup */}
          </li>
          <li>
            <Link to="/audienceinteraction">Audience Interaction</Link> {/* Use the correct path for signup */}
          </li>
          <li>
            <Link to="/services">Services</Link> {/* Use the correct path for signup */}
          </li>
          <li>
            <Link to="/aboutus">Aboutus</Link> {/* Use the correct path for signup */}
          </li>
        </ul>
        
      </div>
      
      <img className="another-image" src={anotherImage} alt="Another Image" />
      <div className="text-container"> 
      <h2>Support and 
        Community 
        for
        Parkinson's 
        Patients
      </h2>
             
      <p>
        At Linton Wellness, we provide a safe  
        and supportive environment where  
        Parkinson's patients can connect   
        with others and learn about managing their  
        symptoms. Our community is here to 
        help you navigate the challenges of
        Parkinson's disease and find joy in life.
      </p>
      </div>
      
      <button className="home-join-button">Join Now</button>
    </div>
  );
};

export default Home;
