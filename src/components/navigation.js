import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .navOpen {
    height: 60vh;
    background-color: #fff3d8;
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
    }
  }
  h3 {
    font-size: 36px;
    padding-top: 30px;
  }
`;

const Header = ({ navOpen }) => {
  return (
    <Wrapper>
      <div className={navOpen ? "navOpen" : "navClosed"}>
        <div style={{ padding: "170px 80px 0 80px" }}>
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
          <h3>Contact</h3>
          <h4>Socials</h4>
          <h4>Email</h4>
          <h4>Phone</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
