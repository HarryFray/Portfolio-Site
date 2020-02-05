import React from "react";
import Logo from "./logo";
import { Link } from "@reach/router";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <h2>About Me</h2>
      <h1>
        I’m a Frontend Developer with extensive experience in various JavaScript
        technologies. I have a deep passion for translating user pains and needs
        into beautiful and accessible applications that improve work and life in
        meaningful ways. I thrive in collaborative environments where there are
        challenging problems to be solved. When I’m not building websites I’m
        happiest reading a good book, camping, or having a coffee with close
        friends.
      </h1>
    </Wrapper>
  );
};

export default AboutMe;
