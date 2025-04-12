// Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const googlePlayUrl = 'https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png';
const microsoftStoreUrl = 'https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png';

function Signup() {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-box">
          <h1 className="logo">Instagram</h1>

          <button className="facebook-login-btn">
            <span className="facebook-icon"></span>
            Log in with Facebook
          </button>

          <div className="separator">
            <div className="line"></div>
            <div className="or-text">OR</div>
            <div className="line"></div>
          </div>

          <form className="signup-form" method="post">
            <input type="text" name="emailOrMobile" placeholder="Mobile Number or Email" required />
            <input type="text" name="fullName" placeholder="Full Name" required />
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" className="signup-btn">Sign up</button>
          </form>
        </div>

        <div className="login-prompt-box">
          <p>Have an account? <Link to="/login">Log in</Link></p>
        </div>

        <div className="get-app-section">
          <p>Get the app.</p>
          <div className="app-stores">
            <a href="#"><img src={googlePlayUrl} alt="Get it on Google Play" /></a>
            <a href="#"><img src={microsoftStoreUrl} alt="Get it from Microsoft" /></a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <select aria-label="Switch Display Language" className="language-select">
          <option value="en">English</option>
        </select>
        <span>© 2024 Instagram from Meta</span>
      </div>
    </div>
  );
}

export default Signup;
