import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ibwe2tdf.us.auth0.com"
    clientId="id1ya6SKlwac5sNYMCyVnOy4ozV2Htpn"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
