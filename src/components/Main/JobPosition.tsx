import React from "react";
import { Stack, STACK_DATA } from "@utils/constants/stack";
import styled from "styled-components";
import { IJobPosition } from "types/experience";
const Position = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    color: var(--blue);
  }

  ul {
    list-style: inside;
    font-size: 3.75rem;
    color: var(--gray);
    line-height: 130%;
    list-style-position: inside;
  }
  .stack {
    display: flex;
    gap: 20px;
    row-gap: 20px;
    flex-wrap: wrap;
    img {
      height: 30px;
    }
  }
  hr {
    background-color: var(--gray);
    height: 2px;
    opacity: 0.1;
  }
`;

interface IJobPositionProps extends IJobPosition {}
const JobPosition = (props: IJobPositionProps) => {
  return (
    <Position>
      <h2>
        {props.title} - {props.place}, {props.date} at {props.company}
      </h2>
      <ul>
        {props.description.map((ent, index) => (
          <li key={index}>{ent}</li>
        ))}
      </ul>
      <div className="stack">
        {props.stack.map((ent, index) => (
          <img
            key={index}
            src={STACK_DATA[ent].image}
            alt={STACK_DATA[ent].title}
            title={STACK_DATA[ent].title}
          />
        ))}
      </div>
      <hr />
    </Position>
  );
};

export default JobPosition;
