import React from "react";
import "./WhyUs.css";

const features = [
  {
    id: 1,
    icon: "technology",
    title: "Technology",
    description: "Aliquam id velit nibh nullam fringilla amet ac."
  },
  {
    id: 2,
    icon: "security",
    title: "Security",
    description: "Blandit massa iaculis id fermentum posuere."
  },
  {
    id: 3,
    icon: "innovation",
    title: "Innovation",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus."
  }
];

// Icon components
const TechnologyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <path d="M7 8h10M7 12h10M7 16h4"></path>
  </svg>
);

const SecurityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const InnovationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21h6M12 3v18M5 12H2M22 12h-3M6.34 6.34l-2.12-2.12M19.78 19.78l-2.12-2.12M6.34 17.66l-2.12 2.12M19.78 4.22l-2.12 2.12"></path>
  </svg>
);

const getIcon = (iconName) => {
  switch (iconName) {
    case "technology":
      return <TechnologyIcon />;
    case "security":
      return <SecurityIcon />;
    case "innovation":
      return <InnovationIcon />;
    default:
      return null;
  }
};

export default function WhyUs() {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        <div className="whyus-content">
          <div className="whyus-text">
            <div className="whyus-label">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>WHY US?</span>
            </div>
            <h2 className="whyus-title">
              What make us stand out from the rest?
            </h2>
            <p className="whyus-description">
              Lorem ipsum dolor sit amet consectetur id urna vulputate condimentum aliquam odio in pellentesque pharetra.
            </p>
            <div className="whyus-features">
              {features.map((feature) => (
                <div key={feature.id} className="whyus-feature-card">
                  <div className="whyus-feature-icon">{getIcon(feature.icon)}</div>
                  <div className="whyus-feature-content">
                    <h3 className="whyus-feature-title">{feature.title}</h3>
                    <p className="whyus-feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="whyus-visual">
            <div className="whyus-image-wrapper">
              <img 
                src="/images/whyus-image.png" 
                alt="Why Us - Customer Support Chat Interface" 
                className="whyus-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
