import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .header {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position:fixed;
    width:100%;
  }
  /* padding: 10px; */
  background: white;

  img {
    width: 15%;
    display: flex;
    justify-content: flex-start;
    /* text-align:center;
    align-items:center; */
    margin: 0 auto;
    margin-left: 5%;
    z-index: 4;

    @media (min-width: 992px) {
      width: 10%;
    }
    @media (min-width: 1200px) {
      width: 18%;
    }
  }
  ul {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    max-height: 0;
    top: 0%;
    transition: all 0.4s ease-out;
    margin-left: 0;
    padding: 0px;
    overflow: hidden;
    background: violet;

    @media (min-width: 1200px) {
      justify-content: flex-start;
      max-height: 100%;
      top: 18%;
    }
    .a {
      padding: 20px;
      font-size: 17px;
    }
    .a:hover {
      background: #01ffff;
    }
    @media (min-width: 992px) {
      position: relative;
      max-height: unset;
      top: 0%;
      flex-direction: row;
      background: transparent;
      height: unset;
      margin-left: 300px;
    }
  }
  .hamburger {
    padding: 20px 20px 33px 30px;
    position: relative;
    z-index: 4;
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    img {
    }
    .hamburger {
      padding: 50px 60px 55px 35px;
    }
  }
  @media (min-width: 1024px) {
    .hamburger {
      display: none;
    }
  }
  span {
    width: 30px;
    height: 3px;
    background: #01ffff;
    position: absolute;
    border-radius: 7px;
    transition: transform 0.3s;
    &:before {
      width: 100%;
      height: 100%;
      background: #01ffff;
      border-radius: 10px;
      position: absolute;
      top: -7px;
      content: "";
      transition: all 0.3s ease-out;
    }
    &:after {
      width: 100%;
      height: 100%;
      background: #01ffff;
      border-radius: 10px;
      position: absolute;
      top: 7px;
      content: "";
      transition: all 0.3s ease-out;
    }
  }
  .open {
    span {
      background: transparent;
      &:before {
        top: 0;
        transform: rotate(495deg);
      }
      &:after {
        top: 0;
        transform: rotate(-495deg);
      }
    }
  }
  .change {
    max-height: 100%;
  }
`;

function Burger() {
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper className="wrap">
      <div className="header">
        <img src="./logo.jpg" className="logo" alt="" />

        <div
          className={checked ? "hamburger open" : "hamburger"}
          wwqess14
          onClick={() => setChecked(!checked)}
        >
          <span></span>
        </div>
        <ul className={checked ? "menu change" : "menu"}>
          <li className="a">Home</li>
          <li className="a">About  Us</li>
          <li className="a">Gallery</li>
          <li className="a">Blog</li>
          <li className="a">Our Programs</li>
          <li className="a">Opportunities</li>
          <li className="a">Donate</li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Burger;
