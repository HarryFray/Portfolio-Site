import React, { useRef } from "react";
import styled from "styled-components";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

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

  .SocialIcons > * {
    width: 72px;
    height: 72px;
    color: white;
    margin: 16px 16px 0 0;
  }

  .Content {
    display: flex;
    padding: 220px 40px 0 54px;
    justify-content: space-between;
  }
`;

const Header = ({ navOpen }) => {
  return (
    <Wrapper>
      <div className={navOpen ? "navOpen" : "navClosed"}>
        <div className="Content">
          <div>
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="https://github.com/HarryFray">About Me</a>
              </li>
              <li>
                <a href="https://github.com/HarryFray">Approach</a>
              </li>
              <li>
                <a href="https://github.com/HarryFray">Design</a>
              </li>
              <li>
                <a href="https://github.com/HarryFray">The Code</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <div className="SocialIcons">
              <LinkedInIcon />
              <GitHubIcon />
              <YouTubeIcon />
              <FacebookIcon />
            </div>
            <h4>Email: harry.fray7@gmail.com</h4>
            <h4>Phone: (660) 888-9796</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
