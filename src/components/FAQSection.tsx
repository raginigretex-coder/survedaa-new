import React, { useState } from "react";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories = [
    "General",
    "For Societies",
    "For Teachers",
    "Security",
  ];

  const faqData = {
    0: [
      {
        question: "What is the Music Room platform?",
        answer:
          "Music Room is a secure, society-based music learning platform designed for residential communities.",
      },
      {
        question: "What instruments are supported?",
        answer:
          "Keyboards, guitars, drums, microphones, and other studio equipment depending on the society setup.",
      },
      {
        question: "What instruments are available in the Music Room?",
        answer:
          "Depending on the society setup, instruments may include keyboards, guitars, drums, microphones, and studio accessories.",
      },
      {
        question: "Is prior music experience required?",
        answer:
          "No. The platform supports beginners, intermediate learners, and advanced students with structured learning modules.",
      },
      {
        question: "How are classes conducted?",
        answer:
          "Classes are conducted inside the society’s dedicated music room by verified teachers according to scheduled sessions.",
      },
    ],
    1: [
      {
        question: "How can a society register?",
        answer:
          "Societies can register through the platform. After verification, they receive a dedicated dashboard.",
      },
      {
        question: "Can building admins manage schedules?",
        answer:
          "Yes. Admins can manage teachers, students, instruments, and session schedules from one dashboard.",
      },
    ],
    2: [
      {
        question: "How are teachers verified?",
        answer:
          "Teachers go through a structured verification process before approval.",
      },
      {
        question: "Can teachers manage attendance?",
        answer:
          "Yes. Teachers can track attendance and manage their session availability.",
      },
    ],
    3: [
      {
        question: "Is the platform secure?",
        answer:
          "Yes. The system uses role-based access and building-level data separation.",
      },
      {
        question: "Is resident data private?",
        answer:
          "Yes. Data is protected with secure architecture and access controls.",
      },
    ],
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h1 className="faq-heading">
          Frequently <span className="faq-heading-accent">Asked Questions</span>
        </h1>

        <div className="faq-grid-section">
          {/* Sidebar */}
          <div className="faq-sidebar">
            {categories.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setActiveIndex(null);
                }}
                className={`faq-category ${activeTab === index ? "active" : ""
                  }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="faq-content">
            {/* <h4 className="faq-section-label">
              {categories[activeTab]}
            </h4> */}

            {faqData[activeTab as keyof typeof faqData].map(
              (faq, index) => (
                <div
                  key={index}
                  className={`faq-item-section ${activeIndex === index ? "open" : ""
                    }`}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {activeIndex === index ? "+" : "-"}
                    </span>
                  </div>

                  {activeIndex === index && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
