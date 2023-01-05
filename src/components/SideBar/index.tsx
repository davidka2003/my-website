import React from "react";
import styled from "styled-components";
import profilePicture from "@assets/profilePictureMedium.jpeg";
const StyledSideBar = styled.section`
  height: 100vh;
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
    max-height: 300px;
    border-radius: 2em;
  }
  .section {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: left;
  }
`;
interface SideBarProps {}

const SideBar = ({}: SideBarProps) => {
  return (
    <StyledSideBar>
      <header className="header">
        <img src={profilePicture} alt="" className="profile" />
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
        <h3>Contact me</h3>
      </section>
    </StyledSideBar>
  );
};

export default SideBar;
