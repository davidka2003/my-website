import { JOB_POSITIONS } from "@utils/constants/jobPositions";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typed from "react-typed";
const StyledHeader = styled.header`
  background-color: var(--blue);
  height: 200px;
  display: flex;
  align-items: center;
  padding: 50px;
  .title {
    font-size: 10rem;
  }
`;

interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  const [currentPositionId, setCurrentPositionId] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPositionId((current) => (current + 1) % JOB_POSITIONS.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <StyledHeader>
      <h1 className="title">
        <Typed
          strings={JOB_POSITIONS}
          typeSpeed={40}
          backSpeed={30}
          backDelay={2000}
          loop={true}
        />
      </h1>
    </StyledHeader>
  );
};

export default Header;
