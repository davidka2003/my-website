import React from "react";
import styled from "styled-components";
import profilePicture from "@assets/profilePictureMedium.jpeg";
import Linkedin from "@assets/icons/linkedin.svg";
import Instagram from "@assets/icons/instagram.svg";
import Github from "@assets/icons/github.svg";
const StyledMobileIntro = styled.div`
  min-height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 769px) {
    display: none;
  }
  background-color: var(--dark-blue);
  h2 {
    font-size: 8rem;
  }
  h3 {
    font-size: 6rem;
  }
  .profile {
    align-self: flex-end;
    max-width: 80%;
    border-radius: 10px;
  }
  .name {
    align-self: flex-start;
    font-size: 9.5rem;
  }
  .contact {
  }
  .socials {
    align-self: flex-end;
    &_links {
      display: flex;
      flex-direction: row-reverse;
      gap: 10px;
      img {
        height: 25px;
      }
    }
  }
`;
interface MobileIntroProps {}

const MobileIntro = ({}: MobileIntroProps) => {
  return (
    <StyledMobileIntro>
      <img className="profile" src={profilePicture} alt="Full Stack developer - David Paley" />
      <h1 className="name">David Paley</h1>
      <div className="middle">
        <h2>Contact me</h2>
        <h3>
          Tel: <a href="tel:+972-53-475-9131">+972-53-475-9131</a>
        </h3>
        <h3>
          Email:{" "}
          <a href="mailto:d4v1ds0n.p@gmail.com?subject=Something very important&body=Hi, I found u...">
            d4v1ds0n.p@gmail.com
          </a>
        </h3>
        <h3>
          <a href="https://goo.gl/maps/tNG21jRn8j18FvZn8">Tel Aviv, Israel</a>
        </h3>
      </div>
      <div className="socials">
        <h2>Social Links</h2>
        <div className="socials_links">
          <a href="https://www.linkedin.com/in/d4v1ds0n/">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="https://www.instagram.com/d4v1ds0n_/">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://github.com/davidka2003">
            <img src={Github} alt="Github" />
          </a>
        </div>
      </div>
    </StyledMobileIntro>
  );
};

export default MobileIntro;
