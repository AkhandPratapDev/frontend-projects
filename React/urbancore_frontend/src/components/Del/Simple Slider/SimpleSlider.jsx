import React, { useEffect, useState } from "react";
import "./SimpleSlider.css"; 
import { assets } from "../../assets/assets";


const SimpleSlider = () => {
  const images = [
     assets.header_img_one,
     assets.header_img_two,
     assets.header_img_three,
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 2s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slider">
      {/* Image */}
      <img src={images[index]} alt="slider" className="slider-img" />

      {/* Dots */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`dot ${i === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SimpleSlider;
