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
  }

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 100vw 100vw;

  @media (min-width: 1020px) {
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

const Card = ({ title, link, description, img }) => {
  return (
    <a
      href={link ? link : "https://www.linkedin.com/in/nicholas-fray-40923388/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Wrapper img={img}>
        <div>
          <h3>{title}</h3>
          <h4>{description}</h4>
        </div>
      </Wrapper>
    </a>
  );
};

export default Card;
