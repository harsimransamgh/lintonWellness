
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Signup from './signup'; // Import the Signup component
import Audienceinteraction from './audienceInteraction';
import Services from './services';
import AboutUs from './aboutus';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} /> {/* Use a different path for signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/audienceinteraction" element={<Audienceinteraction />} />  
        <Route path="/services" element={<Services />} />  
        <Route path="/aboutus" element={<AboutUs />} />  
      </Routes>
    </Router>
  );
};

export default App;



