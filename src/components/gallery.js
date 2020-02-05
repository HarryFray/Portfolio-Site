import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import Card from "./card";
import MobileMenu from "./mobileMenu";
import MerlinPic from "../assets/img_merlin.jpeg";
import HSPic from "../assets/img_hs.jpeg";
import LiveDraftPic from "../assets/img_nfl.jpeg";
import AcuuStorm from "../assets/img_srorm.jpeg";
import Rex from "../assets/img_rex.jpeg";

const list = [
  {
    title: "Kansas City Reality",
    link: "https://merlinlabs.gg/",
    description: "All in one site for purchasing homes in KC",
    img: MerlinPic,
    id: 0
  },
  {
    title: "Merlin CMS",
    // link: "www.facebook.com",
    description: "Content managment system for home brokerages",
    img: HSPic,
    id: 1
  },
  {
    title: "Live Draft X",
    // link: "www.facebook.com",
    description: "Fantasy football draft taking place on a single machine",
    img: LiveDraftPic,
    id: 2
  },
  {
    title: "AccuStorm",
    // link: "www.facebook.com",
    description:
      "Visualize hail storms over property data producing contact information",
    img: AcuuStorm,
    id: 3
  },
  {
    title: "REX",
    // link: "www.facebook.com",
    description: "Recommendation tracking for songs, movies, books, and food",
    img: Rex,
    id: 4
  }
];

const Wrapper = styled.div`
  margin-top: 40vh;
  .menu-item {
    width: 40vw;
    height: 50vh;

    background-color: green;
    padding: 0 40px;
    margin: 5px 10px;
    cursor: pointer;
  }

  .horizontal-menu {
    background-color: orange;
    width: 100vw;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Gallery = () => {
  return (
    <>
      <Wrapper>
        <ScrollMenu
          alignCenter={false}
          data={list.map(project => {
            return <Card {...project} />;
          })}
        />
      </Wrapper>
      <MobileMenu list={list} />
    </>
  );
};

export default Gallery;
