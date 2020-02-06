import React from "react";
import styled from "styled-components";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import { animateScroll as scroll } from "react-scroll";
import { PROJECTS } from "./gallery";
import { Link } from "@reach/router";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;

  .Section {
    height: 100vh;
  }

  .ScrollCTA {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100vw;
    align-items: center;
    margin: 20px;
    flex-direction: column-reverse;
    h3 {
      margin: 0;
    }
  }
`;

const NON_POJECT_PAGES = [
  { title: "About me", slug: "about-me" },
  { title: "Approach", slug: "approach" },
  { title: "Design", slug: "design" },
  { title: "The Code", slug: "the-code" }
];

/* gets project data using slug from url */
const getProjectData = slug => {
  return [...PROJECTS, ...NON_POJECT_PAGES].filter(
    proj => proj.slug === slug
  )[0];
};

const Default = ({ projectId }) => {
  const { title, img } = getProjectData(projectId);
  return (
    <div
      style={{
        position: "absolute",
        top: "10vh",
        textAlign: "center",
        width: "100vw"
      }}
    >
      <h1 style={{ margin: "20px" }}>{`${title} comming soon!`}</h1>
      <div
        style={{
          width: "100%",
          height: "10vh",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img ||
            ""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw 100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white"
          }}
        >
          <h5>Go Back</h5>
        </Link>
      </div>
      <h2>
        Sorry, this page has not been built yet. <br /> Check back Feb 16, 2020!
      </h2>
    </div>
  );
};

/* reach router puts the url query on react props!!! */
const Project = ({ projectId }) => {
  //   const handleScroll = () => {
  //     scroll.scrollToBottom();
  //   };

  return (
    <Wrapper>
      <div className="Section">
        <Default projectId={projectId} />
        {/* <div className="ScrollCTA" onClick={handleScroll}>
            <ArrowDownwardIcon className="Icon" />
            <h3>Scroll Down</h3>
          </div> */}
      </div>
    </Wrapper>
  );
};

export default Project;
