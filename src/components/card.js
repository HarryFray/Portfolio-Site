import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vw;
  overflow: hidden;
  color: white;
  position: relative;
  text-align: center;
  div {
    text-align: start;
    margin: 80px 0 0 40px;
    position: absolute;
  }

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 100vw 100vw;

  @media (min-width: 990px) {
    background-size: 50vh 50vh;
    transform: rotate(90deg);
    width: 50vh;
    height: 50vh;
    img {
      width: 50vh;
      height: auto;
    }
  }
`;

const Card = ({ title, link, description, img, slug }) => {
  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Wrapper img={img}>
        <div>
          <h3>{title}</h3>
          <h4>{description}</h4>
        </div>
      </Wrapper>
    </a>
  ) : (
    <Link to={`project/${slug}`}>
      <Wrapper img={img}>
        <div>
          <h3>{title}</h3>
          <h4>{description}</h4>
        </div>
      </Wrapper>
    </Link>
  );
};

export default Card;
