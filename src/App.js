import React, { useEffect } from "react";
import Home from "./components/home";
import { Router } from "@reach/router";
import AboutMe from "./components/aboutme";
import styled from "styled-components";
import Project from "./components/project";

const App = () => {
  useEffect(() => {
    if (window.screen.width > 990) {
      document.body.style.overflow = "hidden";
    }
    document.body.style.margin = 0;
    document.body.style.fontFamily = "sans-serif";
    document.body.style.fontFamily = "Asap";
  });

  const GlobalStyles = styled.div`
    // heading
    h1 {
      font-size: 72px;
      margin: 0;
    }
    // sub heading
    h2 {
      font-size: 36px;
    }
    // sub heading (greyed out)
    h3 {
      opacity: 0.7;
      font-size: 48px;
    }
    // image copy
    h4 {
      font-size: 72px;
      line-height: 120px;
    }
    // logo
    h5 {
      font-size: 54px;
      line-height: 40px;
      margin: 0px;
    }
    // All Icons
    .Icon {
      width: 80px;
      height: 80px;
    }

    @media (min-width: 990px) {
      // heading
      h1 {
        font-size: 36px;
        margin: 0;
      }
      // sub heading
      h2 {
        font-size: 18px;
      }
      // sub heading (greyed out)
      h3 {
        font-size: 24px;
      }
      // image copy
      h4 {
        font-size: 36px;
        line-height: 60px;
      }
      // logo
      h5 {
        font-size: 36px;
        line-height: 26px;
        margin: 0px;
      }
      // All Icons
      .Icon {
        width: 40px;
        height: 40px;
      }
    }
  `;
  return (
    <GlobalStyles>
      <Router>
        <AboutMe path="about-me" />
        <Home path="/" />
        <Project path="project/:projectId" />
      </Router>
    </GlobalStyles>
  );
};

export default App;
