//import modules
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


//bring react application into html element
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
