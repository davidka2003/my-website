import { STACK_ALL, STACK_DATA } from "@utils/constants/stack";
import React, { useEffect, useRef } from "react";
import Section from "./Section";
import styled from "styled-components";
import { MyStackService } from "./MyStack.service";
const Scene = styled.div`
  width: 100%;
  height: 300px;
  canvas {
    width: 100%;
  }
`;

const MyStack = () => {
  const { scene } = MyStackService();
  return (
    <Section title="My Stack">
      <hr />
      <Scene ref={scene} />
    </Section>
  );
};

export default MyStack;
