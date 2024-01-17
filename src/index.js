import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "react-oidc-context";
import App from "./App";

const oidcConfig = {
  authority: "https://accounts.google.com",
  client_id:"883876459084-ecirpvv87tvfe0dpa2tvjc80hlt3mss9.apps.googleusercontent.com",
  redirect_uri: "http://localhost:3000",
  client_secret: "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"
};

ReactDOM.render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
