import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  top: 3vw;
  mix-blend-mode: difference;
  position: fixed;
  font-size: 42px;
  line-height: 45px;
  h2 {
    margin: 0;
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      <h2 style={{ color: "white" }}>Nicholas</h2>
      <h2 style={{ color: "white", marginLeft: "28px" }}>Harry</h2>
      <h2 style={{ color: "white", marginLeft: "56px" }}>Fray</h2>
    </Wrapper>
  );
};

export default Logo;
