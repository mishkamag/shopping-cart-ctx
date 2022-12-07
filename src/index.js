import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./store/ShoppingCartCtx";
import { AuthContextProvider } from "./store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ShoppingCartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ShoppingCartProvider>
    </BrowserRouter>
  </AuthContextProvider>
);
