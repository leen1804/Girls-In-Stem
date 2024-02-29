import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import Headings from "./styled/Headings";
const Wrapper = styled.section`
  padding: 95px 10px;
  @media (max-width: 1025px) {
    padding: 95px 65px;
  }
  @media (max-width: 400px) {
    padding:  95px 30px;
  }
  .content {
    text-align: center;
    h1 {
      font-size: 32px;
      margin-bottom: 15px;
      @media (max-width: 400px) {
    font-size: 1.5rem; 
  }
    }
    p {
      color: #848484;
      line-height: 30px;
    }
  }
  .below {
    display: flex;
    flex-direction: row;
    margin-top: 65px;
    @media (min-width: 770px) {
      justify-content: space-around;
    }
    h6 {
      font-size: 25px;
      color: black;
      font-weight: 400;
      padding-bottom: 20px;
    }
    p {
      color: #848484;
      font-size: 16px;
      line-height: 30px;
    }
    .icon {
      p {
        font-size: 14px;
        color: #212529;
      }
      padding-top: 20px;
    }
    .icons {
      margin-top: 50px;
      display: flex;
      gap: 20px;
      svg {
        font-size: 17px;
        color: #212529;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .icons {
        margin-bottom: 40px;
      }
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-right: 46px;
  }
  button {
    background: #06bcd5;
    border: none;
    color: white;
    display: flex;
    width: 100%;
    padding: 14px 0px;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 1rem;
  width: 100%;

  input {
    padding: 15px;
    border: 1px solid #dedede;
    background: none;
    transition: all 0.3s ease;

    @media (min-width: 768px) {
      padding: 13px 5px 13px 3px;
    }
    &:focus {
      outline: none;
      border-color: black;
      &::placeholder {
        transform: translateY(-19px);
        font-size: 12px;
        color: black;
      }
    }

    &::placeholder {
      transition: all 0.3s ease;
    }
  }

  @media (min-width: 768px) {
    width: 480px;
  }
  .big {
    padding: 20px 60px 90px 5px;
  }
`;
function Get() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zkgq9d4",
        "template_xmsdsli",
        formData,
        "TqoSlF59XGOST8wYp"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );

    setFormData({
      firstName: "",
      surname: "",
      email: "",
      phoneNumber: "",
    });
  };
  return (
    <Wrapper>
      <div className="content">
        <Headings>
          <h1>
            <span />
            Get In Touch <span />
          </h1>
        </Headings>
        <p className="big">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          facilis eveniet maiores ab maxime <br /> nam ut numquam molestiae
          quaerat incidunt?
        </p>
        <p className="small">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          facilis eveniet maiores ab maxime nam ut numquam molestiae quaerat
          incidunt?
        </p>
      </div>
      <div className="below">
        <div className="side">
          <h6>Find us at the office</h6>
          <p>
            2nd Floor North Wing, Salamaat Heights, 9th Avenue (Between George
            Silundika & <br /> Robert Mugabe Way) Bulawayo, Zimbabwe
          </p>
          <div className="icon">
            <p>Phone: +263719206067</p>
            <p>Fax: +880-31-000-000</p>
            <p>Email: hello@meghna.com</p>
          </div>
          <div className="icons">
            <FiFacebook />
            <FaInstagram />
            <FiTwitter />
            <LuLinkedin />
          </div>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="le">
            <InputContainer>
              <input
                type="text"
                placeholder="Your Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="message"
                placeholder="Messages"
                name="messages"
                className="big"
                value={formData.message}
                onChange={handleChange}
              />
            </InputContainer>
          </div>
          <button type="submit" className="buttoni">
            Submit
          </button>
        </Form>
      </div>
    </Wrapper>
  );
}

export default Get;
