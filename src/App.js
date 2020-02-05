import React from "react";
import Home from "./components/home";
import { Router } from "@reach/router";
import AboutMe from "./components/aboutme";

const App = () => {
  return (
    <Router>
      <AboutMe path="about-me" />
      <Home path="/" />
    </Router>
  );
};

export default App;
