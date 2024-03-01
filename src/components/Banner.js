import React, { useState, useEffect } from "react";
import "../styles/style.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
 
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["banner.jpg", "/Asset-1.png", "banner.jpg"];
  const [autoplay, setAutoplay] = useState(true);

  const changeBackground = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    } else {
      setCurrentImageIndex(
        (currentImageIndex - 1 + images.length) % images.length
      );
    }
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [autoplay, images.length]);

  useEffect(() => {
    if (window.innerWidth <= 1025) {
      setAutoplay(true);
    } else {
      setAutoplay(false);
    }
  }, []);

  const renderDots = () => {
    return images.map((image, index) => (
      <div
        key={index}
        className={`dot ${currentImageIndex === index ? "active" : ""}`}
        onClick={() => handleDotClick(index)}
      />
    ));
  };

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="hero-content">
        <h1>Girls In STEM Trust</h1>
        <p className="big">
          Equipping women with digital skills to shape their futures, fostering
          inclusivity and gender equality in tech. Join us in
        </p>
        <p className="big">
          inempowering women through access to training, mentorship, and
          resources for a brighter tomorrow.
        </p>
        <p className="small">
          Equipping women with digital skills to shape their futures, fostering
          inclusivity and gender equality in tech. Join us inempowering women
          through access to training, mentorship, and resources for a brighter
          tomorrow.
        </p>
        <button className="brd">About Us</button>
      </div>
      <div>
        <FiArrowLeft
          className="prev"
          onClick={() => changeBackground("prev")}
        />
      </div>
      <div>
        <FiArrowRight
          className="next"
          onClick={() => changeBackground("next")}
        />
      </div>
      <div className="dots-container">{renderDots()}</div>
      <div className="th">
        <a href="#Cards">
          <div className="at">
            <div className="the"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
