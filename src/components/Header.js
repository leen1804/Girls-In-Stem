import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .header {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
  }
 
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
    background: white;

    @media (min-width: 1200px) {
      justify-content: flex-start;
      max-height: 100%;
      top: 18%;
    }
    a {
      position: relative;
      padding: 20px;
      font-size: 17px;
      color: black;
      text-decoration: none;
    }

    a:hover::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background: #06bcd5;
      top: 49%;
      left: 0;

      transition: all 0.3s ease;
    }
    a:hover {
      color: #06bcd5;
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
          <li className="a">
            <a href="">Home</a>
          </li>
          <li className="a">
            <a href="">About Us</a>
          </li>
          <li className="a">
            <a href="">Gallery</a>
          </li>
          <li className="a">
            <a href="">Blog</a>
          </li>
          <li className="a">
            <a href="">Our Programs</a>
          </li>
          <li className="a">
            <a href="">Opportunities</a>
          </li>
          <li className="a">
            <a href="">Donate</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Burger;
