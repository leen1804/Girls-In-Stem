import React from "react";
import styled from "styled-components";
import "./styles.css";

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  background: url(./frm.jpg);
  background-size: cover;
  background-position: center;
  color: white;
  flex-direction: column;
  padding: 60px 60px;
  gap: 90px;
  @media (max-width: 1025px) {
    height: 69vh;
  }
  @media (max-width: 400px) {
    padding: 10px 20px;
  }
  span {
    height: 2px;
    width: 40px;
    background-color: white;
    display: inline-block;
    align-items: center;
    margin: 10px 20px;
  }
  @media (max-width: 1000px) {
    height: 100vh;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 160px 100px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 100;
    font-family: "Catamaran", sans-serif;
  }
  .pic {
    @media (min-width: 1000px) {
      width: 4000px;
      height: 448px;
    }
    @media (max-width: 768px) {
      margin-left: 69px;
    }
    background-image: url("abt.jpg");
    background-size: cover;
    background-position: center;
    transition: background-image 0.3s ease;
    width: 500px;
    height: 400px;
    @media (max-width: 400px) {
      display: none;
    }
  }

  .pic:hover {
    background-image: url("blue.jpg");
  }
  h2 {
    margin-bottom: 2rem;
    font-family: "Catamaran", sans-serif;
    font-size: 32px;
    @media (max-width: 400px) {
      margin-bottom: 1rem;
    }
    @media (max-width: 400px) {
    font-size: 1.5rem; 
  }
  }
  .content {
  }
`;

function About() {
  return (
    <Wrapper>
      <div className="content">
        <h2>
          <span />
          About GIST
          <span />
        </h2>
        <p>
          Girls in STEM Trust is a non profit organisation that invests in girls
          and young women in Africa to help them develop digital and
          entrepreneurship skills that will build future successful careers in
          all facets of STEMFar far away, behind the word mountains, far from
          the countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove right at the coast of the
          SemanticsLorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non{" "}
        </p>
        <button className="brd">Read More</button>
      </div>
      <div className="pic"></div>
    </Wrapper>
  );
}

export default About;
