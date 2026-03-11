import React, { useEffect, useRef } from "react";
import "./Features.css";

const features = [
  {
    id: 1,
    title: "Smart savings and investments",
    description:
      "Lorem ipsum dolor sit amet consectetur sit nulla in malesuada aenean iaculis varius aliquam ut laoreet convallis.",
    image: "/images/fea1.png",
  },
  {
    id: 2,
    title: "AI-powered financial insights",
    description:
      "Lorem ipsum dolor sit amet consectetur sit nulla in malesuada aenean iaculis varius aliquam ut laoreet convallis.",
    image: "/images/fea1.png",
  },
  {
    id: 3,
    title: "Secure digital transactions",
    description:
      "Lorem ipsum dolor sit amet consectetur sit nulla in malesuada aenean iaculis varius aliquam ut laoreet convallis.",
    image: "/images/fea1.png",
  },
  {
    id: 4,
    title: "Real-time expense tracking",
    description:
      "Lorem ipsum dolor sit amet consectetur sit nulla in malesuada aenean iaculis varius aliquam ut laoreet convallis.",
    image: "/images/fea1.png",
  },
  // {
  //   id: 5,
  //   title: "Automated bill payments",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur sit nulla in malesuada aenean iaculis varius aliquam ut laoreet convallis.",
  //   image: "/images/fea1.png",
  // },
  // {
  //   id: 6,
  //   title: "Multi-currency support",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur sit nulla in malesuada aenean iaculis varius aliquam ut laoreet convallis.",
  //   image: "/images/fea1.png",
  // },
  // {
  //   id: 7,
  //   title: "24/7 customer support",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur sit nulla in malesuada aenean iaculis varius aliquam ut laoreet convallis.",
  //   image: "/images/fea1.png",
  // },
];

export default function Features() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Adjust threshold and rootMargin for mobile devices
    const isMobile = window.innerWidth <= 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { 
        threshold: isMobile ? 0.15 : 0.2, 
        rootMargin: isMobile ? '0px 0px -30% 0px' : '0px 0px -20% 0px' 
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="features-scroll-section">
      <div className="features-header">

      <div className="features-header-label">
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
          <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9" />
        </svg>

        <span>FEATURES</span>
      </div>

        <h1 className="features-main-title">
          Browse our set of <br /> banking services
        </h1>

      </div>

      <div className="features-scroll-container">
        {features.map((item, index) => (
          <div
            key={item.id}
            className={`feature-stack-card card-${index + 1}`}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="feature-stack-content">

              <div className="feature-stack-image">
                <img
                  src={item.image}
                  alt=""
                  className="feature-stack-actual-image"
                />
              </div>

              <div className="feature-stack-text">
                <h2 className="feature-stack-title">{item.title}</h2>
                <p className="feature-stack-desc">{item.description}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}