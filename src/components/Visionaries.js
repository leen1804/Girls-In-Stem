import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../styles/style.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import Headings from "../styled/Headings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.8rem;
  font-weight: 500;

  text-align: center;
  font-family: "Catamaran", sans-serif;
  p {
    text-align: center;
    color: #848484;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  @media (max-width: 1025px) {
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: ${({ isCenter }) =>
    isCenter ? "0 0 10px hsl(187, 95%, 43%)" : "none"};
  text-align: center;
  width: 400px;

  @media (max-width: 768px) {
    width: 60% important!;
    margin-top: 50px;
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
    top: 70%;
    left: 0;
    width: 100%;
    height: 28%;
    background-color: #06bdd5af;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    color: white;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 40px;
  }
  .over {
    display: flex;
    gap: 20px;
  }
`;

const Icon = styled.img`
  width: 100%;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 20px;
  font-weight: 200;
  margin-bottom: 5px;
  font-family: "Catamaran", sans-serif;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #000000;
  font-weight: 300;
  margin-top: 15px;
  margin-bottom: 25px;
  padding: 0 40px;
  font-family: "Catamaran", sans-serif;
`;

function Cards() {
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
    <div className="cardy">
      <div className="upy">
        <Headings>
          {" "}
          <SectionHeader>
            <span />
            Meet Our Visionaries: Board Members
            <span />
          </SectionHeader>
        </Headings>
        <p className="up">
          Lorem ipsum dolor sit amet consectetur. Sed pellentesque tortor ornare
          aliquet sit. Ridiculus ultrices sed diam sem <br /> venenatis elit
          vitae senectus amet. Facilisis lacus et quam consectetur turpis
          commodo neque. Nunc nunc gravida <br /> neque dui quis gravida sed
          aenean.Facilisis lacus et quam consectetur turpis commodo neque. Nunc
          nunc gravida{" "}
        </p>
        <p className="small">
          {" "}
          Lorem ipsum dolor sit amet consectetur. Sed pellentesque tortor ornare
          aliquet sit. Ridiculus ultrices sed diam sem venenatis elit vitae
          senectus amet. Facilisis lacus et quam consectetur turpis commodo
          neque. Nunc nunc gravida neque dui quis gravida sed aenean.Facilisis
          lacus et quam consectetur turpis commodo neque. Nunc nunc gravida{" "}
        </p>
      </div>
      {isSmallScreen && (
       
          <div className = ' yoh'> 
           <Slider {...settings}>
          <Card>
              <Icon src="./pii.jpg" alt="Icon 1" />
              <div className="overlay">
                <div className="over">
                  <FaFacebook />
                  <FaInstagram />
                  <FiTwitter />
                  <CiLinkedin />
                </div>
              </div>
            
            <div className="cnt">
              <CardTitle>Michael Jonson</CardTitle>
              <h6>Head of Marketing</h6>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur necessitatibus ullam, culpa odio.
              </CardDescription>
            </div>
          </Card>
          <Card isCenter>
            <div className="picContainer">
              <Icon src="./2b.png" alt="Icon 2" />
              <div className="overlay">
                <div className="over">
                  <FaFacebook />
                  <FaInstagram />
                  <FiTwitter />
                  <CiLinkedin />
                </div>
              </div>
            </div>
            <CardTitle>Michael Jonson</CardTitle>
            <h6>Head of Marketing</h6>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur necessitatibus ullam, culpa odio.
            </CardDescription>
          </Card>
          <Card>
            <div className="picContainer">
              <Icon src="./girl.png" alt="Icon 3" />
              <div className="overlay">
                <div className="over">
                  <FaFacebook />
                  <FaInstagram />
                  <FiTwitter />
                  <CiLinkedin />
                </div>
              </div>
            </div>
            <CardTitle>Michael Jonson</CardTitle>
            <h6>Head of Marketing</h6>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur necessitatibus ullam, culpa odio.
            </CardDescription>
          </Card>
          </Slider>
          </div>
     
      )}
      {!isSmallScreen && (
        <CardContainer>
          <Card>
            <div className="picContainer">
              <Icon src="./pii.jpg" alt="Icon 1" />
              <div className="overlay">
                <div className="over">
                  <FaFacebook />
                  <FaInstagram />
                  <FiTwitter />
                  <CiLinkedin />
                </div>
              </div>
            </div>

            <div className="cnt">
              <CardTitle>Michael Jonson</CardTitle>
              <h6>Head of Marketing</h6>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur necessitatibus ullam, culpa odio.
              </CardDescription>
            </div>
          </Card>
          <Card isCenter>
            <div className="picContainer">
              <Icon src="./2b.png" alt="Icon 2" />
              <div className="overlay">
                <div className="over">
                  <FaFacebook />
                  <FaInstagram />
                  <FiTwitter />
                  <CiLinkedin />
                </div>
              </div>
            </div>
            <CardTitle>Michael Jonson</CardTitle>
            <h6>Head of Marketing</h6>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur necessitatibus ullam, culpa odio.
            </CardDescription>
          </Card>
          <Card>
            <div className="picContainer">
              <Icon src="./girl.png" alt="Icon 3" />
              <div className="overlay">
                <div className="over">
                  <FaFacebook />
                  <FaInstagram />
                  <FiTwitter />
                  <CiLinkedin />
                </div>
              </div>
            </div>
            <CardTitle>Michael Jonson</CardTitle>
            <h6>Head of Marketing</h6>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur necessitatibus ullam, culpa odio.
            </CardDescription>
          </Card>
        </CardContainer>
      )}
    </div>
  );
}

export default Cards;
