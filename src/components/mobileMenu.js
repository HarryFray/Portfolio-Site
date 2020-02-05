import React from "react";
import styled from "styled-components";
import Card from "./card";

const Wrapper = styled.div`
  z-index: 5;
  position: absolute;
  width: 100vw;
  height: 1000px;
  margin-top: 40vh;
  @media (min-width: 1020px) {
    display: none;
  }
`;

const MobileMenu = ({ list }) => {
  return (
    <Wrapper>
      {list.map(project => {
        return <Card {...project} />;
      })}
    </Wrapper>
  );
};

export default MobileMenu;
