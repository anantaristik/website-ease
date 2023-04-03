// components/TestimonialCarousel.js
import React from "react";
import Slider from "react-slick"; 
import styles from "./TestimonialCard.module.css";

const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      logo: "logo1.png",
      text: "Testimonial 1",
    },
    {
      id: 2,
      logo: "logo2.png",
      text: "Testimonial 2",
    },
    {
      id: 3,
      logo: "logo3.png",
      text: "Testimonial 3",
    },
    // ...
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.slide}>
            <div className={styles.testimonialCard}>
              <img src={testimonial.logo} alt="Company logo" />
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
