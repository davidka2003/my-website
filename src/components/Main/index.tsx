import Header from "@components/Header";
import React from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import MyStack from "./MyStack";
import Section from "./Section";
const StyledMain = styled.main`
  flex: 1 0 0;
  background-color: var(--white);
  padding-left: 40px;
  .content {
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    h1 {
      color: var(--black);
    }
  }
`;
interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <StyledMain>
      <Header />
      <div className="content">
        <AboutMe />
        <Experience />
        <MyStack />
      </div>
    </StyledMain>
  );
};

export default Main;
