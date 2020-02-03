import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import Navigation from "./navigation";

const Wrapper = styled.div`
  font-family: "Asap", sans-serif;
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
    transform: rotate(-90deg);
    /* may need to play with in the future to get horizontal scroll to work properly */
    // transform: rotate(-90deg) translateY(-500px);

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

        <h1 style={{ padding: "170px 0" }}>
          Enjoy the process of creating
          <br /> get real results
        </h1>
      </div>
      {/* <div class="horizontal-scroll-wrapper squares">
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
        <div>item 6</div>
        <div>item 7</div>
        <div>item 8</div>
      </div> */}
    </Wrapper>
  );
};

export default Header;
