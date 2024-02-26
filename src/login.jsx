// // login.jsx
// import React from 'react';
// import './login.css';

// const Login = () => {
//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     console.log('Login logic goes here');
//   };

//   return (
//     <div className="login-container"> {/* Added className for the outer div */}
//       <h5>Welcome Back!</h5>
//       <form onSubmit={handleLogin}>
//         <label htmlFor="emailOrPhone">Email or Phone:</label>
//         <input type="text" id="emailOrPhone" name="emailOrPhone" required />

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" required />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import logo from './logo rectangle.png';

const Login = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login logic goes here');
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
            <Link to="/services">Services</Link> {/* Use the correct path for signup */}
          </li>
          <li>
            <Link to="/aboutus">Aboutus</Link> {/* Use the correct path for signup */}
          </li>
        </ul>
      </div>

      <div className="login-container">
        <h5>Welcome Back!</h5>
        <form onSubmit={handleLogin}>
          <label htmlFor="emailOrPhone">Email or Phone:</label>
          <input type="text" id="emailOrPhone" name="emailOrPhone" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
