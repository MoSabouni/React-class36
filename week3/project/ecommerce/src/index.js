import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProductDetails from "./components/ProductDetails";
import reportWebVitals from "./reportWebVitals";
import FavoritesList from "./components/FavoritesList";
import { FavoriteIdsProvider } from "./context/FavoriteIdsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoriteIdsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </Router>
  </FavoriteIdsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
