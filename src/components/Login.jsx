import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section - Image */}
        <div className="login-left">
          <div className="login-left-content">
            <div className="login-header">
              {/* <div className="login-logo">AMU</div> */}
            </div>
            <div className="login-tagline">
              {/* <p>Capturing Moments, Creating Memories</p> */}
              <div className="login-carousel-indicator">
                <span className="login-indicator-dot active"></span>
                <span className="login-indicator-dot"></span>
                <span className="login-indicator-dot"></span>
              </div>
            </div>
          </div>
          <div className="login-image-overlay"></div>
          <img 
            src="/images/landing.jpg" 
            alt="Background" 
            className="login-background-image"
          />
        </div>

        {/* Right Section - Form */}
        <div className="login-right">
          <Link to="/" className="login-back-button login-back-button-right">
            <span className="login-back-arrow">←</span> Back to website
          </Link>
          <div className="login-form-container">
            <h1 className="login-title">Log in</h1>
            <p className="login-subtitle">
              Don't have an account? <Link to="/signup" className="login-link">Sign up</Link>
            </p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-form-group">
                <input
                  type="email"
                  id="email"
                  className="login-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="login-form-group">
                <div className="login-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="login-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {showPassword ? (
                        <path d="M2.5 3.75L16.25 16.25M10 3.125C6.875 3.125 4.375 4.75 2.5 7.5C4.375 10.25 6.875 11.875 10 11.875C13.125 11.875 15.625 10.25 17.5 7.5C15.625 4.75 13.125 3.125 10 3.125ZM10 9.375C8.625 9.375 7.5 8.25 7.5 6.875C7.5 5.5 8.625 4.375 10 4.375C11.375 4.375 12.5 5.5 12.5 6.875C12.5 8.25 11.375 9.375 10 9.375Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      ) : (
                        <path d="M10 3.125C6.875 3.125 4.375 4.75 2.5 7.5C4.375 10.25 6.875 11.875 10 11.875C13.125 11.875 15.625 10.25 17.5 7.5C15.625 4.75 13.125 3.125 10 3.125ZM10 9.375C8.625 9.375 7.5 8.25 7.5 6.875C7.5 5.5 8.625 4.375 10 4.375C11.375 4.375 12.5 5.5 12.5 6.875C12.5 8.25 11.375 9.375 10 9.375Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      )}
                    </svg>
                  </button>
                </div>
                <div className="login-forgot-password">
                  <Link to="/forgot-password" className="login-forgot-link">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button type="submit" className="login-submit-button">
                Log in
              </button>
            </form>

            {/* Divider */}
            {/* <div className="login-divider">
              <span>Or log in with</span>
            </div> */}

            {/* Social Login Buttons */}
            {/* <div className="login-social-buttons">
              <button type="button" className="login-social-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3333 10.2273C18.3333 9.51818 18.2727 8.83636 18.1591 8.18182H10V12.05H14.8409C14.6409 13.3 13.9273 14.3591 12.8409 15.0682V17.5773H15.9091C17.4091 16.1864 18.3333 14.1727 18.3333 10.2273Z" fill="#4285F4"/>
                  <path d="M10 18.75C12.075 18.75 13.8409 18.0227 15.1091 16.8409L12.0409 14.3318C11.2409 14.8682 10.1864 15.2273 10 15.2273C7.99545 15.2273 6.36818 13.8409 5.72273 12.0227H2.53182V14.6045C3.84091 17.2045 6.63636 18.75 10 18.75Z" fill="#34A853"/>
                  <path d="M5.72273 12.0227C5.52273 11.4091 5.40909 10.7545 5.40909 10.0795C5.40909 9.40455 5.52273 8.75 5.72273 8.13636V5.55455H2.53182C1.84091 6.93182 1.40909 8.45455 1.40909 10.0795C1.40909 11.7045 1.84091 13.2273 2.53182 14.6045L5.72273 12.0227Z" fill="#FBBC05"/>
                  <path d="M10 4.93182C11.25 4.93182 12.3409 5.34091 13.1818 6.13636L15.1818 4.13636C13.8409 2.90909 12.075 2.40909 10 2.40909C6.63636 2.40909 3.84091 3.95455 2.53182 6.55455L5.72273 9.13636C6.36818 7.31818 7.99545 5.93182 10 4.93182Z" fill="#EA4335"/>
                </svg>
                <span>Google</span>
              </button>
              <button type="button" className="login-social-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.625 3.125H4.375C3.33947 3.125 2.5 3.96447 2.5 5V15C2.5 16.0355 3.33947 16.875 4.375 16.875H15.625C16.6605 16.875 17.5 16.0355 17.5 15V5C17.5 3.96447 16.6605 3.125 15.625 3.125Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 13.75C11.3807 13.75 12.5 12.6307 12.5 11.25C12.5 9.86929 11.3807 8.75 10 8.75C8.61929 8.75 7.5 9.86929 7.5 11.25C7.5 12.6307 8.61929 13.75 10 13.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Apple</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
