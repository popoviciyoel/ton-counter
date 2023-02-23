import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://popoviciyoel.github.io/ton-counter/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);
