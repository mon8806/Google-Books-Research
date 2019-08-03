//importing module
import React from "react";

//a function that display the github icon in the footer bootstrap
function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

//exporting footer component
export default Footer;
