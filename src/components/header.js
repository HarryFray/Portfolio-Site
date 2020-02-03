import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import Navigation from "./navigation";
import Gallery from "./gallery";

const Wrapper = styled.div`
  font-family: "Asap", sans-serif;

  div {
    box-sizing: border-box;
  }

  .top {
    height: 50vh;
    width: 100vw;
    padding: 50px 80px 0 80px;
    position: absolute;
    background-color: white;
    z-index: 100;
  }

  .Logo {
    top: 2vw;
    position: fixed;
    font-size: 42px;
  }

  .MenuIcon {
    top: 2vw;
    right: 8vw;
    position: fixed;
  }
`;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Wrapper>
      <Navigation navOpen={navOpen} />
      <div className="top">
        <div className="Logo">
          <h2>
            Harry
            <br />
            Fray
          </h2>
        </div>
        <div className="MenuIcon">
          <MenuIcon
            style={{ width: "80px", height: "80px" }}
            onClick={() => setNavOpen(!navOpen)}
          />
        </div>

        <h1 style={{ padding: "170px 0", fontSize: "54px" }}>
          Enjoy the process of creating
          <br /> get real results
        </h1>
      </div>
      <Gallery />
    </Wrapper>
  );
};

export default Header;
