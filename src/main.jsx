import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// App component ko index.html ke #root me lagana
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
