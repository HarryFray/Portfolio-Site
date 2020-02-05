import React from "react";
import styled from "styled-components";
import Navigation from "./navigation";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  position: fixed;

  .Copy {
    position: absolute;
    top: 15vh;
    text-align: start;
    margin: 0 0 150px 40px;
    position: absolute;
    bottom: 8px;
    left: 16px;
    h2 {
      line-height: 125px;
      margin: 10px 0;
      font-size: 72px;
    }

    h1 {
      font-size: 48px;
      opacity: 0.8;
    }
  }
`;

const AboutMe = () => {
  return (
    <>
      <Navigation />
      <Wrapper>
        <div className="Copy">
          <h1>About Me</h1>
          <h2>
            I’m a creator with a deep passion for translating user pains and
            needs into beautiful and accessible applications. I thrive in
            collaborative environments where there are challenging problems to
            be solved.
          </h2>
        </div>
      </Wrapper>
    </>
  );
};

export default AboutMe;
