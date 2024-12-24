import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UnoStoreHooks } from "@simulanisindia/ui";

const root = ReactDOM.createRoot(document.getElementById("root"));
const { UnoProvider } = UnoStoreHooks;
root.render(
  <React.StrictMode>
    <UnoProvider>
      <App />
    </UnoProvider>
  </React.StrictMode>
);
