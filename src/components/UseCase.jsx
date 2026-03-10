import React from "react";
import "./UseCase.css";

const useCases = [
  {
    id: 1,
    icon: "briefcase",
    title: "For small business",
    description: "Mi quis pharetra velit scelerisque. Eu habitant habitant sapien leo tellus.",
    image: "/images/usecase1.JPG",
    layout: "image-top" // image on top, text below
  },
  {
    id: 2,
    icon: "rocket",
    title: "For startups",
    description: "Vitae mollis morbi malesuada duis a mollis cursus consectetur rhoncus.",
    image: "/images/usecase2.JPG",
    layout: "text-top" // text on top, image below
  },
  {
    id: 3,
    icon: "building",
    title: "For enterprises",
    description: "Tortor in lectus iaculis eget pretium sed cras diam pharetra tristique.",
    image: "/images/usecase3.JPG",
    layout: "image-top" // image on top, text below
  }
];

// Icon components
const BriefcaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

const BuildingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
    <path d="M6 12h12"></path>
    <path d="M6 6h12"></path>
    <path d="M6 18h12"></path>
    <path d="M10 2v4"></path>
    <path d="M14 2v4"></path>
  </svg>
);

const getIcon = (iconName) => {
  switch (iconName) {
    case "briefcase":
      return <BriefcaseIcon />;
    case "rocket":
      return <RocketIcon />;
    case "building":
      return <BuildingIcon />;
    default:
      return null;
  }
};

export default function UseCase() {
  return (
    <section className="usecase-section">
      <div className="usecase-header">
        <div className="usecase-header-label">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>USE CASES</span>
        </div>
        <h1 className="usecase-main-title">
          Designed for <br /> businesses of all sizes
        </h1>
        <p className="usecase-header-description">
          Lorem ipsum dolor sit amet consectetur sit nulla in malesuada aenean iaculis varius aliquam ut laoreet convallis ac accumsan sit.
        </p>
      </div>
      <div className="usecase-container">
        {useCases.map((item) => (
          <div key={item.id} className={`usecase-card usecase-card-${item.layout}`}>
            {item.layout === "image-top" ? (
              <>
                <div className="usecase-image-wrapper">
                  <img src={item.image} alt={item.title} className="usecase-image" />
                </div>
                <div className="usecase-content">
                  <div className="usecase-card-header">
                    <div className="usecase-icon">{getIcon(item.icon)}</div>
                    <h3 className="usecase-title">{item.title}</h3>
                  </div>
                  <p className="usecase-description">{item.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="usecase-content">
                  <div className="usecase-card-header">
                    <div className="usecase-icon">{getIcon(item.icon)}</div>
                    <h3 className="usecase-title">{item.title}</h3>
                  </div>
                  <p className="usecase-description">{item.description}</p>
                </div>
                <div className="usecase-image-wrapper">
                  <img src={item.image} alt={item.title} className="usecase-image" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
