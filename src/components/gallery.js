import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import styled from "styled-components";
// list of items
const list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" }
];

const Wrapper = styled.div`
  margin-top: 55vh;
  .menu-item {
    width: 45vw;
    height: 30vh;

    @media (min-width: 1024px) {
      width: 40vw;
      height: 50vh;
    }
    background-color: green;
    padding: 0 40px;
    margin: 5px 10px;
    cursor: pointer;
  }

  .horizontal-menu {
    background-color: orange;
    width: 100vw;
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
    <Wrapper>
      <ScrollMenu data={menu} selected={selected} onSelect={onSelect} />
    </Wrapper>
  );
};

export default Gallery;
