import React from "react";
import JSONServerData from "./components/JSONServerData";
import StyledCompButton from "./components/StyledCompButton";
import "./styles/styles.css";


const App = () => {

  return (
    <div>
      <h1> Normatl CSS</h1>
      <StyledCompButton />
      <JSONServerData />
    </div>
  );
};

export default React.memo(App);
