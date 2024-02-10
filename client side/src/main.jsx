import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uxio1hvoij3fuh5p.us.auth0.com"
      clientId="6QnWGxn3urqrSoCwfs1LkPOsFrvQuEQM"
      authorizationParams={{ redirect_uri: "http://localhost:5173" }}
      audience="http://localhost:8000"
      scopeid="openid profile email"
    >
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
