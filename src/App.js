import React from "react";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <Header onScroll={e => console.log(e)} />
    </>
  );
};

export default App;
