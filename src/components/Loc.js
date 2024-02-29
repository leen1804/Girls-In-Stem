import React from "react";
import styled from "styled-components";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

const Wrapper = styled.section`
  .upy {
    background: url(./map.jpg);
    height: 55.5vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
    }
    @media (max-width: 1025px) {
      height: 23.5vh;
    }
  }
  .down {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 50px 100px 30px 100px;
    @media (max-width: 768px) {
      padding: 50px 65px 30px 65px;
    }
    @media (max-width: 400px) {
      padding: 50px 20px 30px 20px;
    }
    background: #272727;
  }
  .ip {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 50px;
    @media (max-width: 768px) {
      gap: 10px;
    }
    @media (max-width: 400px) {
      display: block;
    }
    a {
      font-family: "Catamaran", sans-serif;
      color: white;
      font-size: 14.5px;
      text-decoration: none;
      padding: 30px;
     
    @media (max-width: 1025px) {
      padding: 0px;
    }
    @media (max-width: 768px) {
        padding: 8px;
    }
      font-weight: 100px;
    }
  }
  .id {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  p {
    color: #dcdcdc;
    font-size: 14px;
    padding-top: 20px;
    font-family: "Catamaran", sans-serif;
    line-height: 30px;
    font-weight: 100px;
  }
  span {
    text-decoration: underline;
  }
  .yd {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    margin-top: 10px;
  }
  svg {
    color: white;
    font-size: 22px;
  }
  .cv {
    padding-top: 13px;
    color: #dcdcdc;
  }
`;

function Loc() {
  return (
    <Wrapper>
      <div className="upy">
        <img src="./Fu.png" />
      </div>
      <div className="down">
        <div className="ip">
          <a href="">About Us</a>
          <a href=""> Gallery</a>
          <a href="">Blog</a>
          <a href=""> Contact</a>
          <a href=""> Our Programs</a>
          <a href="">Opportunties</a>
          <a href="">Donate</a>
        </div>
        <div className="id">
          <p className="big">
            Lorem ipsum dolor sit amet consectetur. Vel auctor facilisis
            ultrices nullam nulla morbi. Id tellus vestibulum aliquet cras
            aenean pharetra <br /> egestas mauris consequat. Sodales augue
            pulvinar morbi arcu nunc feugiat interdum in. Adipiscing ac
            fermentum diam ipsum libero ac{" "}
          </p>
          <p className="small">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Vel auctor facilisis
            ultrices nullam nulla morbi. Id tellus vestibulum aliquet cras
            aenean pharetra egestas mauris consequat. Sodales augue pulvinar
            morbi arcu nunc feugiat interdum in. Adipiscing ac fermentum diam
            ipsum libero ac{" "}
          </p>
          <div className="yd">
            <FiFacebook />
            <FaInstagram />
            <FiTwitter />
            <LuLinkedin />
          </div>
        </div>
        <hr />
        <p className="cv">
          GIST | Powered by <span>Habelite</span>
        </p>
      </div>
    </Wrapper>
  );
}

export default Loc;
