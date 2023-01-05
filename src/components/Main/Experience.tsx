import { EXPERIENCE } from "@utils/constants/experience";
import { Stack } from "@utils/constants/stack";
import React from "react";
import styled from "styled-components";
import JobPosition from "./JobPosition";
import Section from "./Section";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: stretch;
  & > div:last-child hr {
    display: none;
  }
`;
const Experience = () => {
  return (
    <Section title="Experience">
      <hr />
      <Content>
        {EXPERIENCE.map((exp) => (
          <JobPosition {...exp} />
        ))}
      </Content>
    </Section>
  );
};

export default Experience;
