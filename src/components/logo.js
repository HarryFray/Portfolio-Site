import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Logo = styled(({ className }) => {
  return (
    <Link to="/" className={className}>
      <h5>Nicholas</h5>
      <h5 className="Harry">Harry</h5>
      <h5 className="Fray">Fray</h5>
    </Link>
  );
})`
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

  @media (min-width: 1000px) {
    .Harry {
      margin-left: 26px;
    }
    .Fray {
      margin-left: 43px;
    }
  }
`;

export default Logo;
