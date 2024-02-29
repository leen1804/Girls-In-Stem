import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Wrapper = styled.section`
  position: relative;

  .banner {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .carousel {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
  }

  .carousel img.active {
    opacity: 1;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
    text-align: center;
  }

  .brd {
    border: 2px solid #06bcd5;
    background: none;
    color: white;
    padding: 10px 30px;
    margin-top: 40px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
  }

  .brd::before {
    content: "";
    position: absolute;
    top: 0;
  
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #06bcd5;
    transition: left 0.3s;
    z-index: -1;
  }

  .brd:hover::before {
    left: 0;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 65.5px;
    font-weight: 400;
  }

  p {
    line-height: 40px;
    font-weight: 400;
  }

  .arrow-icon {
    font-size: 24px;
    color: white;
  }

  .left-arrow,
  .right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #06bcd5;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
  }

  .left-arrow {
    left: -270px;
  }

  .right-arrow {
    right: -270px;
  }
`;

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["./Asset-1.png", "./banner.jpg", "./Asset-1.png"];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Wrapper>
      <div className="banner">
        <div className="carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className={index === currentImageIndex ? "active" : ""}
            />
          ))}
        </div>
        <div className="content">
          <h1>Girls In STEM Trust</h1>
          <div className="left-arrow" onClick={prevImage}>
          <FiArrowLeft className="arrow-icon" />
        </div>
          <p>
            Equipping women with digital skills to shape their futures,
            fostering inclusivity and gender equality in tech. Join us in
            empowering women through access to training, mentorship, and
            resources for a brighter tomorrow.
          </p>
          <button className="brd">About Us</button>
        </div>
        
        <div className="right-arrow" onClick={nextImage}>
          <FiArrowRight className="arrow-icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
