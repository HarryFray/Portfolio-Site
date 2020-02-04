import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vw;
  overflow: hidden;

  position: relative;
  text-align: center;
  color: white;
  div {
    text-align: start;
    margin: 0 0 150px 40px;
    position: absolute;
    bottom: 8px;
    left: 16px;
    color: white;
    h2 {
      line-height: 125px;
      margin: 10px 0;
    }
  }
  h1 {
    opacity: 0.8;
  }

  img {
    height: 100vw;
  }

  @media (min-width: 1024px) {
    width: 50vh;
    height: 50vh;
    img {
      height: 50vh;
    }
  }
`;

const Card = ({ title, link, description, img }) => {
  return (
    <a href={link}>
      <Wrapper href={link}>
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <img src={img} alt={img} />
      </Wrapper>
    </a>
  );
};

export default Card;
