import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./styles.css";
import Headings from "./styled/Headings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-top: 5rem;
  margin-bottom: 2.6rem;
  text-align: center;
  font-family: "Catamaran", sans-serif;
  @media (max-width: 400px) {
    font-size: 1.5rem; 
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  border-radius: 5px;
  background-color: #fff;
  box-shadow: ${({ isCenter }) =>
    isCenter ? "0px 20px 20px 0px #06bcd533" : ""};
  text-align: center;
  width: 500.59px;
  padding: 30px 25px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(80px);
  }

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 768px) {
   margin-left:46%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: "Catamaran", sans-serif;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
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
    autoplaySpeed: 2000
  };

  return (
    <div className="cards" id="Cards">
      <Headings>
        <SectionHeader>
          <span />
          Our Programmes and Activities
          <span />
        </SectionHeader>
      </Headings>
      {isSmallScreen && (
        <Slider {...settings}>
          
          <Card>
            <Icon src="./i.jpg" alt="Icon 1" />
            <CardTitle>Coding</CardTitle>
            <CardDescription>
              We facilitate workshops and coding challenges including the
              Africa Code Week and the Women of Purpose Fellowship Programme
            </CardDescription>
          </Card>
          <Card isCenter>
            <Icon src="./2.png" alt="Icon 2" />
            <CardTitle>Job Shadowing</CardTitle>
            <CardDescription>
              We provide girls with a unique opportunity to find out how other
              professionals work and what their roles involve.{" "}
            </CardDescription>
          </Card>
          <Card>
            <Icon src="./3.jpg" alt="Icon 3" />
            <CardTitle>Mentorship</CardTitle>
            <CardDescription>
              We conduct mentorship and coaching sessions for the girls with
              established professionals who will be sharing their career
              journey and advising them.{" "}
            </CardDescription>
          </Card>
        </Slider>
      )}
      {!isSmallScreen && (
        <CardContainer>
          <Card>
            <Icon src="./i.jpg" alt="Icon 1" />
            <CardTitle>Coding</CardTitle>
            <CardDescription>
              We facilitate workshops and coding challenges including the
              Africa Code Week and the Women of Purpose Fellowship Programme
            </CardDescription>
          </Card>
          <Card isCenter>
            <Icon src="./2.png" alt="Icon 2" />
            <CardTitle>Job Shadowing</CardTitle>
            <CardDescription>
              We provide girls with a unique opportunity to find out how other
              professionals work and what their roles involve.{" "}
            </CardDescription>
          </Card>
          <Card>
            <Icon src="./3.jpg" alt="Icon 3" />
            <CardTitle>Mentorship</CardTitle>
            <CardDescription>
              We conduct mentorship and coaching sessions for the girls with
              established professionals who will be sharing their career
              journey and advising them.{" "}
            </CardDescription>
          </Card>
         </CardContainer>
      )}
    </div>
  );
}

export default Cards;
