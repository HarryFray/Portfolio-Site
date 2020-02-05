import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import Logo from "./logo.js";
import { animateScroll as scroll } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MessageIcon from "@material-ui/icons/Message";

const Wrapper = styled.div`
  .navOpen {
    height: 60vh;
    background-color: black;
    overflow-y: hidden;
    max-height: 60vh; /* approximate max height */

    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 1, 1);
  }

  .navClosed {
    background-color: white;
    height: 0;
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 1, 1);
    max-height: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      font-size: 72px;
      padding: 16px 0;
      color: white;
    }
  }
  h3,
  h4 {
    font-size: 36px;
    padding-top: 30px;
    color: white;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .SocialIcons a > * {
    width: 72px;
    height: 72px;
    color: white;
    margin: 18px 34px 0 0;
  }

  .Content {
    display: flex;
    padding: 220px 40px 0 54px;
    justify-content: space-between;
  }
`;

const HeaderTodo = styled.div`
  position: absolute;
  z-index: 50;
  padding-left: 54px;
  mix-blend-mode: exclusion;

  .MenuIcon {
    top: 2vw;
    right: 8vw;
    position: fixed;
  }
`;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <HeaderTodo>
        <Logo />
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
      </HeaderTodo>
      <Wrapper>
        <div className={navOpen ? "navOpen" : "navClosed"}>
          <div className="Content">
            <div>
              <h3>Menu</h3>
              <ul>
                <li>
                  <Link to="about-me">About Me</Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nicholas-fray-40923388/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Approach
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nicholas-fray-40923388/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Design
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/HarryFray"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Code
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Contact</h3>
              <div className="SocialIcons">
                <a
                  href="https://www.linkedin.com/in/nicholas-fray-40923388/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/HarryFray"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jxtqnUSgzrI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href="https://medium.com/@harry.fray7/regular-expressions-with-javascript-an-introduction-2142fc01db14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageIcon />
                </a>
              </div>
              <h4>Email: harry.fray7@gmail.com</h4>
              <h4>Phone: (660) 888-9796</h4>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
