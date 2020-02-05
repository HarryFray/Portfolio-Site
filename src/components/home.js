import React from "react";
import styled from "styled-components";
import Navigation from "./navigation";
import Gallery from "./gallery";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "@reach/router";

const Wrapper = styled.div`
  div {
    box-sizing: border-box;
  }

  .top {
    background-color: white;
    height: 40vh;
    width: 100vw;
    padding-left: 50px;
    position: absolute;
    z-index: 5;
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

const Home = () => {
  return (
    <Wrapper>
      <div style={{ height: "100vh;" }}>
        <Navigation />
        <div className="top">
          <div className="SubHeading">
            <h1>
              Enjoy the process of
              <br />
              creating, get real results.
            </h1>
            <Link className="AboutMe" to="about-me">
              <h2>More about me</h2>
              <ArrowForwardIcon className="ArrowIcon" />
            </Link>
          </div>
        </div>
      </div>
      <Gallery />
    </Wrapper>
  );
};

export default Home;
