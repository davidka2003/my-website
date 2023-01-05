import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    color: var(--black);
  }
  hr {
    height: 2px;
    background-color: var(--blue);
  }
`;

interface ISectionProps {
  title: string;
  children: ReactNode;
}
const Section = (props: ISectionProps) => {
  return (
    <StyledSection>
      <h1>{props.title}</h1>
      {props.children}
    </StyledSection>
  );
};

export default Section;
