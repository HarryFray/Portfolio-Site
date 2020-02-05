import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vw;
  overflow: hidden;
  color: white;
  position: relative;
  text-align: center;
  div {
    text-align: start;
    margin: 0 0 150px 40px;
    position: absolute;
    bottom: 8px;
    left: 16px;
    h2 {
      line-height: 125px;
      margin: 10px 0;
      font-size: 72px;
    }
  }
  h1 {
    font-size: 48px;
    opacity: 0.8;
  }

  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 100vw 100vw;

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
    <a
      href={link ? link : "https://www.linkedin.com/in/nicholas-fray-40923388/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Wrapper img={img}>
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      </Wrapper>
    </a>
  );
};

export default Card;
