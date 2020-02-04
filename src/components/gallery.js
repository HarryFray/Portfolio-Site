import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import MobileMenu from "./mobileMenu";
import img from "../assets/IMG_test.jpeg";
import Card from "./card";

const list = [
  {
    title: "Merlin Labs CMS",
    link: "www.facebook.com",
    description: "Content managment system for home brokerages",
    img,
    id: 0
  },
  {
    title: "Merlin Labs CMS",
    link: "www.facebook.com",
    description: "Content managment system for home brokerages",
    img,
    id: 1
  },
  {
    title: "Merlin Labs CMS",
    link: "www.facebook.com",
    description: "Content managment system for home brokerages",
    img,
    id: 2
  },
  {
    title: "Merlin Labs CMS",
    link: "www.facebook.com",
    description: "Content managment system for home brokerages",
    img,
    id: 3
  },
  {
    title: "Merlin Labs CMS",
    link: "www.facebook.com",
    description: "Content managment system for home brokerages",
    img,
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
