import React from "react";
import ReactDOM from "react-dom/client";
import AppPriceTracker from "./AppPriceTracker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppPriceTracker />
  </React.StrictMode>
);
