import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Wrapper = styled(Link)`
  top: 3vw;
  text-decoration: none;
  mix-blend-mode: difference;
  position: fixed;
  color: white;

  .Harry {
    margin-left: 28px;
  }
  .Fray {
    margin-left: 56px;
  }

  @media (min-width: 1020px) {
    .Harry {
      margin-left: 26px;
    }
    .Fray {
      margin-left: 43px;
    }
  }
`;

const Logo = () => {
  return (
    <Wrapper to="/">
      <h5>Nicholas</h5>
      <h5 className="Harry">Harry</h5>
      <h5 className="Fray">Fray</h5>
    </Wrapper>
  );
};

export default Logo;
