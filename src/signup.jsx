// // signup.jsx

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// import './signup.css'; // Update the CSS import with a unique name

// const Signup = () => {
//   return (
//     <div>
//     <div className="signup-container">
//       <h3>Create an Account</h3>
//       <form className="signup-form">
//         <label htmlFor="username">Username:</label>
//         <input className="signup-input" type="text" id="username" name="username" required />

//         <label htmlFor="email">Email:</label>
//         <input className="signup-input" type="email" id="email" name="email" required />

//         <label htmlFor="password">Password:</label>
//         <input className="signup-input" type="password" id="password" name="password" required />

//         <button className="signup-button" type="submit">Sign Up</button>
//       </form>
//        </div>
//        <p className="signup-p">
//        Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
    

//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'; // Update the CSS import with a unique name
import logo from './logo rectangle.png';

const Signup = () => {
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

      <div className="signup-container">
        <h3>Create an Account</h3>
        <form className="signup-form">
          <label htmlFor="username">Username:</label>
          <input className="signup-input" type="text" id="username" name="username" required />

          <label htmlFor="email">Email:</label>
          <input className="signup-input" type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input className="signup-input" type="password" id="password" name="password" required />

          <button className="signup-button" type="submit">Sign Up</button>
        </form>
      </div>

      <p className="signup-p">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
