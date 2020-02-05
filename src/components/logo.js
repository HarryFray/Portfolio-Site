import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Wrapper = styled(Link)`
  top: 3vw;
  text-decoration: none;
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
    <Wrapper to="/">
      <h2 style={{ color: "white" }}>Nicholas</h2>
      <h2 style={{ color: "white", marginLeft: "28px" }}>Harry</h2>
      <h2 style={{ color: "white", marginLeft: "56px" }}>Fray</h2>
    </Wrapper>
  );
};

export default Logo;
