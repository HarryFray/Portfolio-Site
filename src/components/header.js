import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

const Wrapper = styled.div`
  .horizontal-scroll-wrapper::-webkit-scrollbar {
    display: none;
  }

  div {
    box-sizing: border-box;
  }

  .horizontal-scroll-wrapper {
    position: absolute;
    display: block;
    left: 0;
    max-height: 100vw;
    margin: 0;
    padding-top: 1px;
    overflow-y: auto;
    overflow-x: hidden;
    transform: rotate(-90deg) translateY(-500px);
    transform-origin: right top;
    & > div {
      display: block;
      padding: 5px;
      background: #cab;
      transform: rotate(90deg);
      transform-origin: right top;
    }
  }

  .squares {
    padding: 250px 0 0 0;
    & > div {
      width: 50vh;
      height: 50vh;
      margin: 10px 0;
    }
  }

  font-family: "Asap", sans-serif;

  .top {
    height: 50vh;
    margin: 0 140px;
    padding-top: 50px;

    h2 {
      margin: 0;
    }
  }

  .left-nav {
    top: 2vw;
    position: fixed;
  }

  .right-nav {
    top: 2vw;
    right: 8vw;
    position: fixed;
  }

  .navOpen {
    height: 50vh;
    background-color: #fff3d8;
    overflow-y: hidden;
    max-height: 500px; /* approximate max height */

    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 1, 1);
  }

  .navClosed {
    height: 0;
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 1, 1);
    max-height: 0;
  }

  .fader {
    -moz-transition: opacity 0.5s linear;
    -o-transition: opacity 0.5s linear;
    -webkit-transition: opacity 0.5s linear;
    transition: opacity 0.5s linear;
  }

  .fader.fadedOut {
    opacity: 0;
  }
`;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Wrapper>
      <div className={navOpen ? "navOpen" : "navClosed"}>
        <div className={navOpen ? "fader" : "fader fadedOut"}>
          <h3 style={{ paddingTop: "200px" }}>
            this is a heading for this cool nav nick made woow what a dev{" "}
          </h3>
        </div>
      </div>
      <div className="top">
        <div className="left-nav">
          <h2>
            Harry
            <br />
            Fray
          </h2>
        </div>
        <div className="right-nav">
          <MenuIcon onClick={() => setNavOpen(!navOpen)} />
        </div>

        <h1 style={{ padding: "80px 0" }}>
          Enjoy the process of creating
          <br /> get real results
        </h1>
      </div>
      <div class="horizontal-scroll-wrapper squares">
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
        <div>item 6</div>
        <div>item 7</div>
        <div>item 8</div>
      </div>
    </Wrapper>
  );
};

export default Header;
