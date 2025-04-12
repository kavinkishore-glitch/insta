import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/home'); 
  };

  return (
    <div className="login-page">
      <div className="image-section">
        <img 
          src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-27b8-51f6-880b-2b2e7f4c5dcc/raw" 
          alt="Instagram app examples" 
          className="login-phones-img" 
        />
      </div>

      <div className="form-section">
        <div className="login-box">
          <h1 className="logo">Instagram</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="Phone number, username, or email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" className="login-button">Log in</button>
          </form>

          <div className="separator">
            <div className="line"></div>
            <div className="or-text">OR</div>
            <div className="line"></div>
          </div>

          <div className="facebook-login">
            <Link to="/home"><span className="facebook-icon"></span>Log in with Facebook</Link>
          </div>

          <div className="forgot-password">
            <Link to="#">Forgot password?</Link>
          </div>
        </div>

        <div className="signup-box">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>

      <div className="footer-copyright">
        <select aria-label="Switch Display Language" className="language-select">
          <option value="en">English</option>
          <option value="ta">Tamil</option>
        </select>
        <span>© 2024 Instagram from Meta</span>
      </div>
    </div>
  );
}

export default Login;
