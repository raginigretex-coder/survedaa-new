import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">
              <span className="hero-headline-line">Meet the</span>
              <span className="hero-headline-line">Future of</span>
              <span className="hero-headline-line">Music Practice</span>
            </h1>
            <p className="hero-description">
              Book professional music rooms equipped with piano,
              guitars, drums, and vocal setups. Practice, jam,
              and create without limits.
            </p>
            <button className="hero-cta-button">
              <span>OPEN YOUR ACCOUNT</span>
              <span className="hero-cta-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33334 12.6667L12.6667 3.33334M12.6667 3.33334H4.66667M12.6667 3.33334V11.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div className="hero-trust">
              <div className="hero-avatars">
                <div className="hero-avatar hero-avatar-1"></div>
                <div className="hero-avatar hero-avatar-2"></div>
                <div className="hero-avatar hero-avatar-3"></div>
              </div>
              <span className="hero-trust-text">Trusted by 150M+ users</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img
                src="/images/landing.jpg"
                alt="Banking app interface with smartphone and credit card"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
