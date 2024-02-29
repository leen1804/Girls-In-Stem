import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import Headings from "./styled/Headings";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 70px;
  @media (max-width: 768px) {
    padding: 70px 65px; 
  }
  @media (max-width: 400px) {
    padding: 70px 10px; 
  }

`;

const Content = styled.div`
  margin-bottom: 20px;
  padding: 30px;
  p {
    line-height: 30px;
    color: #848484;
  }
  h1 {
    margin-bottom: 25px;
    font-size: 2rem; 
    @media (max-width: 400px) {
    font-size: 1.5rem; 
  }
  }
`;

const CarouselWrapper = styled.div`
  align-items: center;
  padding-left: 20px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

function Call() {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const images = [
    "./11.1.jpg",
    "./22.2.jpg",
    "./33.3.jpg",
    "./44.4.jpg",
    "./55.5.jpg",
    "./66.6.jpg",
    "./77.7.jpg",
    "./88.8.jpg",
    "./99.9.jpg",
    "./11.1.jpg",
    "./11.1.jpg",
  ];

  const hoverImages = [
    "./2.2.jpg",
    "./2.2.jpg",
    "./3.3.jpg",
    "./4.4.jpg",
    "./5.5.jpg",
    "./6.6.jpg",
    "./7.7.jpg",
    "./8.8.jpg",
    "./9.9.jpg",
    "./10.0.jpg",
    "./1.1.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Wrapper>
      <Content>
        <div className="content">
          <Headings>
            
             <h1> <span />Collaborating for Success: Our Partners   <span /></h1>
          
          </Headings>
          <p className="big">
            Lorem ipsum dolor sit amet consectetur. Sed pellentesque tortor
            ornare aliquet sit. Ridiculus ultrices sed diam sem <br /> venenatis
            elit vitae senectus amet. Facilisis lacus et quam consectetur turpis
            commodo neque. Nunc nunc gravida <br /> neque dui quis gravidased
            aenean.Facilisis lacus et quam consectetur turpis commodo neque.
            Nunc nunc gravida <br /> neque dui quis gravida sed aenean.
          </p>
          <p className="small">
            Lorem ipsum dolor sit amet consectetur. Sed pellentesque tortor
            ornare aliquet sit. Ridiculus ultrices sed diam sem venenatis elit
            vitae senectus amet. Facilisis lacus et quam consectetur turpis
            commodo neque. Nunc nunc gravida neque dui quis gravidased
            aenean.Facilisis lacus et quam consectetur turpis commodo neque.
            Nunc nunc gravida neque dui quis gravida sed aenean.
          </p>
        </div>
      </Content>
      <CarouselWrapper>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <SlideImage
                src={hoveredImageIndex === index ? hoverImages[index] : image}
                alt={`Slide ${index + 1}`}
                onMouseEnter={() => setHoveredImageIndex(index)}
                onMouseLeave={() => setHoveredImageIndex(null)}
              />
            </div>
          ))}
        </Slider>
      </CarouselWrapper>
    </Wrapper>
  );
}

export default Call;
