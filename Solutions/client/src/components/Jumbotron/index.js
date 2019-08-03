//importing modules
import React from "react";
import "./style.css";

//passing a object through the parameter and returning component
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

//exporting jumbotron component
export default Jumbotron;
