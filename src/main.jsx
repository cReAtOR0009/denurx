import React from "react";
import ReactDOM from "react-dom/client";
import { WaitlistContextProvider } from "./context/waitlistContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WaitlistContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WaitlistContextProvider>
);
