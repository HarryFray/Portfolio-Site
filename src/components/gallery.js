import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import MobileMenu from "./mobileMenu";
import img from "../assets/IMG_test.jpeg";

const list = [
  {
    title: "First",
    link: "www.facebook.com",
    description: "my previous job :(",
    img,
    id: 0
  },
  {
    title: "Second",
    link: "www.facebook.com",
    description: "my previous job :(",
    img: "some image",
    id: 1
  },
  {
    title: "Merlin",
    link: "www.facebook.com",
    description: "my previous job :(",
    img: "some image",
    id: 2
  },
  {
    title: "Merlin",
    link: "www.facebook.com",
    description: "my previous job :(",
    img: "some image",
    id: 3
  },
  {
    title: "Last",
    link: "www.facebook.com",
    description: "my previous job :(",
    img: "some image",
    id: 4
  }
];

const Wrapper = styled.div`
  margin-top: 55vh;
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

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Gallery = () => {
  const [selected, setSelected] = useState("item1");

  const onSelect = key => {
    setSelected(key);
  };

  const menu = Menu(list, selected);

  return (
    <>
      <Wrapper>
        <ScrollMenu
          className="desktopMenu"
          data={menu}
          selected={selected}
          onSelect={onSelect}
        />
      </Wrapper>
      <MobileMenu list={list} />
    </>
  );
};

export default Gallery;
