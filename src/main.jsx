import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HeadProvider } from "react-head";
import App from "./App";
import { SearchProvider } from "./context/SearchContext";
import "./styles/index.css"; // Ensure your global CSS is imported here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/">
      <HeadProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </HeadProvider>
    </Router>
  </React.StrictMode>
);