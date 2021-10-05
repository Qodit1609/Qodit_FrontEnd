import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import HttpsRedirect from "react-https-redirect";

console.log(process.env);

ReactDOM.render(
  // <HttpsRedirect>
  <React.Fragment>
    <App />
  </React.Fragment>,
  // </HttpsRedirect>,
  document.getElementById("root")
);

serviceWorker.unregister();
