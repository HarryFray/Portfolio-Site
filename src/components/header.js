import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import Navigation from "./navigation";
import Gallery from "./gallery";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { animateScroll as scroll } from "react-scroll";

const Wrapper = styled.div`
  font-family: "Asap", sans-serif;

  div {
    box-sizing: border-box;
  }

  .top {
    height: 40vh;
    width: 100vw;
    padding-left: 50px;
    position: absolute;
    background-color: white;
    z-index: 10;
  }

  .Logo {
    top: 3vw;
    mix-blend-mode: difference;
    position: fixed;
    font-size: 42px;
    line-height: 45px;
    h2 {
      margin: 0;
    }
  }

  .MenuIcon {
    mix-blend-mode: difference;
    top: 2vw;
    right: 8vw;
    position: fixed;
  }

  .SubHeading {
    .AboutMe {
      text-decoration: none;
      color: black;

      h2 {
        font-size: 48px;
        margin: 0;
        margin-right: 20px;
      }
      display: flex;
      align-items: center;
    }
    h1 {
      font-size: 72px;
    }
    position: absolute;
    top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .ArrowIcon {
    width: 80px;
    height: 80px;
  }
`;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Wrapper>
      <div style={{ height: "100vh;" }}>
        <Navigation navOpen={navOpen} />
        <div className="top">
          <div className="Logo">
            <h2 style={{ color: "white" }}>Nicholas</h2>
            <h2 style={{ color: "white", marginLeft: "28px" }}>Harry</h2>
            <h2 style={{ color: "white", marginLeft: "56px" }}>Fray</h2>
          </div>
          <div className="MenuIcon">
            <MenuIcon
              style={{
                width: "80px",
                height: "80px",
                color: "white"
              }}
              onClick={() => {
                scroll.scrollToTop();
                setNavOpen(!navOpen);
              }}
            />
          </div>
          <div className="SubHeading">
            <h1>
              Enjoy the process of
              <br />
              creating, get real results.
            </h1>
            <a
              className="AboutMe"
              href="https://www.linkedin.com/in/nicholas-fray-40923388/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>More about me</h2>
              <ArrowForwardIcon className="ArrowIcon" />
            </a>
          </div>
        </div>
      </div>
      <Gallery />
    </Wrapper>
  );
};

export default Header;
