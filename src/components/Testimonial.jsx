import './Testimonial.css';

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Jagruti Padiyar",
      rating: 5,
      review: "My experience with Yamaha guitar was truly amazing! The instrument's rich tones and effortless playability made every note feel like music. Special thanks to Siddharth Lama for his exceptional guidance. Thank you ❤️"
    },
    {
      id: 2,
      name: "Narasimha Rao Gurrala",
      rating: 5,
      review: "Purchased a Yamaha FS80 guitar as a gift. The staff patiently explained everything and helped me understand how to use it. Truly impressed by their service and humility. They genuinely care about customers and always make you feel welcome."
    },
    {
      id: 3,
      name: "Sagnik Jana",
      rating: 5,
      review: "Great place to buy musical instruments. Yamaha instruments are high quality and the sales team helps you choose exactly what you need."
    },
    {
      id: 4,
      name: "Bhharti Dekate",
      rating: 5,
      review: "Had a great experience at Yamaha Music Square, Pune! Purchased Yamaha FSX315C semi acoustic guitar. Staff was helpful, service smooth and professional. My experience with Yamaha guitar was truly amazing!"
    },
    {
      id: 5,
      name: "Audesh Jaiswer",
      rating: 5,
      review: "I love this place. The staff is very humble and always ready to help. They provide excellent guidance and make sure you get the perfect instrument for your needs."
    },
    {
      id: 6,
      name: "Aishwariya Nandi",
      rating: 3,
      review: "Had a great experience at Yamaha Music Square, Pune! Purchased Yamaha FSX315C semi acoustic guitar. The staff was helpful, the collection was impressive, and the service was smooth and professional. Special thanks to Mr. Rachit for his guidance and support he made the whole process easy and enjoyable. Truly recommend this place!"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        className={`testimonial-star ${index < rating ? 'filled' : ''}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    ));
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2 className="testimonial-title">Testimonial</h2>
          {/* <p className="testimonial-subtitle">Read testimonials from our satisfied customers</p> */}
        </div>
        
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-card-header">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="testimonial-text">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
