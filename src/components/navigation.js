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

      padding: 16px 0;
      color: white;
    }
  }
    color: white;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .SocialIcons a > * {
    color: white;
    margin: 12px 28px 0 0;
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
    color: white;
  }
`;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <HeaderTodo>
        <Logo />
        <MenuIcon
          className="MenuIcon Icon"
          onClick={() => {
            scroll.scrollToTop();
            setNavOpen(!navOpen);
          }}
        />
      </HeaderTodo>
      <Wrapper>
        <div className={navOpen ? "navOpen" : "navClosed"}>
          <div className="Content">
            <div>
              <h2>Menu</h2>
              <ul>
                <li>
                  <Link to="about-me">
                    <h1>About Me</h1>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nicholas-fray-40923388/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1>Approach</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nicholas-fray-40923388/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1>Design</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/HarryFray"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1>The Code</h1>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Contact</h2>
              <div className="SocialIcons">
                <a
                  href="https://www.linkedin.com/in/nicholas-fray-40923388/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="Icon" />
                </a>
                <a
                  href="https://github.com/HarryFray"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="Icon" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jxtqnUSgzrI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon className="Icon" />
                </a>
                <a
                  href="https://medium.com/@harry.fray7/regular-expressions-with-javascript-an-introduction-2142fc01db14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageIcon className="Icon" />
                </a>
              </div>
              <h2>Email: harry.fray7@gmail.com</h2>
              <h2>Phone: (660) 888-9796</h2>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
