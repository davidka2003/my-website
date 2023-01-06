import React from "react";
import styled from "styled-components";
const StyledMobileIntro = styled.div`
  @media only screen and (min-width: 769px) {
    display: none;
  }
  background-color: var(--dark-blue);
`;
interface MobileIntroProps {}

const MobileIntro = ({}: MobileIntroProps) => {
  return (
    <StyledMobileIntro>
      <h1>mobile only</h1>
    </StyledMobileIntro>
  );
};

export default MobileIntro;
