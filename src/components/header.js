import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`


  ::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }

  ::-webkit-scrollbar-button {
    width: 1px;
    height: 1px;
  }

  div {
    box-sizing: border-box;
  }

  .horizontal-scroll-wrapper {
    position: absolute;
    display: block;
    left: 0;
    width: 100vh;
    max-height: 100vw;
    margin: 0;
    padding-top: 1px;
    overflow-y: auto;
    overflow-x: hidden;
    transform: rotate(-90deg) translateY(-500px);
    transform-origin: right top;
    & > div {
      display: block;
      padding: 5px;
      background: #cab;
      transform: rotate(90deg);
      transform-origin: right top;
    }
  }

  .squares {
    padding: 250px 0 0 0;
    & > div {
      width: 50vh;
      height: 50vh;
      margin: 10px 0;
    }
  }

  .todo {
     position: fixed;
     font-family: 'Asap', sans-serif;
  }
`;

const Header = () => {
  return (
    <Wrapper>
        <h2 className='todo'>
            Nicholas Harry Fray Portfolio Site
        </h2>
      <div class="horizontal-scroll-wrapper squares">
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
        <div>item 6</div>
        <div>item 7</div>
        <div>item 8</div>
      </div>
    </Wrapper>
  );
};

export default Header;
