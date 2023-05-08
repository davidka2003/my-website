import React from "react";
import styled from "styled-components";
import Linkedin from "@assets/icons/linkedin.svg";
import Instagram from "@assets/icons/instagram.svg";
import Github from "@assets/icons/github.svg";
import profilePicture from "@assets/profilePictureMedium.jpeg";
const StyledSideBar = styled.section`
  height: 100%;
  min-height: 100vh;
  top: 0;
  position: sticky;
  padding: 30px;
  background-color: var(--dark-blue);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  gap: 30px;
  .header {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;
  }
  .profile {
    max-height: 250px;
    border-radius: 2em;
  }
  .section {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: left;
  }
  .socials {
    display: flex;
    gap: 10px;
    img {
      height: 25px;
    }
    @media only screen and (max-width: 1000px) {
      img {
        height: 20px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
interface SideBarProps {}

const SideBar = ({}: SideBarProps) => {
  return (
    <StyledSideBar>
      <header className="header">
        <img src={profilePicture} alt="Full Stack developer - David Paley" className="profile" />
        <h1>David Paley</h1>
      </header>
      <section className="section">
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
      </section>
      <section className="section">
        <h2>Social Links</h2>
        <div className="socials">
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
      </section>
    </StyledSideBar>
  );
};

export default SideBar;
