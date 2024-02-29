import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Headings from "../styled/Headings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.section`
  text-align: center;
  padding: 40px 65px;
  @media (min-width: 1025px) {
    padding: 40px 65px;
  }
  @media (max-width: 400px) {
    padding:  40px 30px;
  }
  h1 {
    font-size: 32px;
    margin-bottom: 15px;
    @media (max-width: 400px) {
    font-size: 1.5rem; 
  }
  }
  p {
    color: #848484;
    font-size: 16px;
    line-height: 30px;
  }
  .pics {
    display: flex;
    gap: 20px;

    justify-content: center;
    margin-top: 75px;
  }
  .picContainer {
    position: relative;
    overflow: hidden;
  }
  .picContainer:hover .overlay {
    opacity: 1;
    pointer-events: auto;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  .overlayContent {
    position: absolute;
    top: 80%;
    left: 57%;
    transform: translate(-50%, -50%);
    width: 360px;
    height: 141px;
    background-color: white;
    padding: 20px;
    text-align: left;
  }
  .content {
    margin-bottom: 40px;
  }
  p {
    line-height: 25px;
  }
  img{
    @media (max-width: 768px) {
   width:100%
  } 
  }
`;

function Dis() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Wrapper>
      <div className="content">
        <Headings>
          {" "}
          <h1>
            <span />
            Discover, Learn, Share: Our Blog <span />
          </h1>
        </Headings>
        <p className="big">
          Lorem ipsum dolor sit amet consectetur. Dignissim ornare fermentum
          facilisis suspendisse. Enim mattis est nunc <br /> laoreet aliquam
          turpis. Nisl et curabitur risus fames mi cum cras massa. Turpis augue
          vulputate condimentum <br />
          nascetur sed velit in.
        </p>
        <p className="small">
          Lorem ipsum dolor sit amet consectetur. Dignissim ornare fermentum
          facilisis suspendisse. Enim mattis est nunc laoreet aliquam turpis.
          Nisl et curabitur risus fames mi cum cras massa. Turpis augue
          vulputate condimentum nascetur sed velit in.
        </p>
      </div>
      {isSmallScreen && (
        <div className = ' yoh'> 
        <Slider {...settings}>
          
          <div className="picContainer">
            <img src="./e.jpg" alt="Image1" />
            <div className="overlay">
              <div className="overlayContent">
                <h2>Women of Purpose Fellowship Program</h2>
                <p>
                  Girls In  STEM  Trust promotes diversity and inclusion and
                  through the Women of Purpose
                </p>
              </div>
            </div>
          </div>
          <div className="picContainer">
            <img src="./f.jpg" alt="Image2" />
            <div className="overlay">
              <div className="overlayContent">
                <h2>Africa Code Week</h2>
                <p>
                  Africa Code Week is the largest digital literacy initiative on
                  the African continent
                </p>
              </div>
            </div>
          </div>
          <div className="picContainer">
            <img src="./g.jpg" alt="Image3" />
            <div className="overlay">
              <div className="overlayContent">
                <h2>Job Shadowing and Internship Program</h2>
                <p>
                  The Girls In STEM Trust job shadowing programme conducted in
                  partnership with Data
                </p>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      )}
      {!isSmallScreen && (
        <div className="pics">
          <div className="picContainer">
            <img src="./e.jpg" alt="Image1" />
            <div className="overlay">
              <div className="overlayContent">
                <h2>Women of Purpose Fellowship Program</h2>
                <p>
                  Girls In  STEM  Trust promotes diversity and inclusion and
                  through the Women of Purpose
                </p>
              </div>
            </div>
          </div>
          <div className="picContainer">
            <img src="./f.jpg" alt="Image2" />
            <div className="overlay">
              <div className="overlayContent">
                <h2>Africa Code Week</h2>
                <p>
                  Africa Code Week is the largest digital literacy initiative on
                  the African continent
                </p>
              </div>
            </div>
          </div>
          <div className="picContainer">
            <img src="./g.jpg" alt="Image3" />
            <div className="overlay">
              <div className="overlayContent">
                <h2>Job Shadowing and Internship Program</h2>
                <p>
                  The Girls In STEM Trust job shadowing programme conducted in
                  partnership with Data
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default Dis;
