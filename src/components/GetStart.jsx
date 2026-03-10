import './GetStart.css';

function GetStart() {
  return (
    <section className="getstart">
      <div className="getstart-container">
        <div className="getstart-content">
          {/* GET STARTED Label at top */}
          <div className="getstart-header-label">
            <div className="getstart-play-icon-box">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span>GET STARTED</span>
          </div>

          {/* Main Headline */}
          <h1 className="getstart-headline">
            <span className="getstart-headline-line">Open your account today and</span>
            <span className="getstart-headline-line">met the future of banking</span>
          </h1>

          {/* Bottom Section with Stats and Phone Mockup */}
          <div className="getstart-bottom-section">
            {/* Left Section - Stats and Content */}
            <div className="getstart-left-section">
              {/* Statistics */}
              <div className="getstart-stats-container">
                <div className="getstart-stat-item">
                  <div className="getstart-stat-number">10M+</div>
                  <div className="getstart-stat-label">CUSTOMERS</div>
                </div>
                <div className="getstart-stat-item">
                  <div className="getstart-stat-number">250B</div>
                  <div className="getstart-stat-label">CAPITAL RAISED</div>
                </div>
              </div>

              {/* Description Text */}
              <p className="getstart-description">
                Lorem ipsum dolor sit amet consectetur consequat arcu vehicula non elementum quis gravida ac id tortor tempus adipiscing vel.
              </p>

              {/* OPEN YOUR ACCOUNT Button */}
              <button className="getstart-account-button">
                <span>OPEN YOUR ACCOUNT</span>
                <span className="getstart-cta-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33334 12.6667L12.6667 3.33334M12.6667 3.33334H4.66667M12.6667 3.33334V11.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Right Section - Phone Mockup */}
            <div className="getstart-phone-mockup">
              <div className="phone-frame">
                <img 
                  src="/images/getstart.png" 
                  alt="Banking app mockup" 
                  className="phone-mockup-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStart;
