import React from "react";
import styled from "styled-components";

const Wrapper = styled.img`
  width: 100vw;
  height: 100vw;
  padding: 8px;
  background-color: green;
  //   padding: 200px 0 0 200px;
`;

// how to place text over and image
// how to format images (prevent distortion)

const Card = ({ title, link, description, img }) => {
  return (
    <Wrapper src={img}>
      {/* <h1>{title}</h1>
      <h2>{description}</h2> */}
    </Wrapper>
  );
};

export default Card;
