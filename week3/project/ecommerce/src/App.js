import React, { useState } from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";
import ProductsList from "./components/ProductsList";

function App() {
  const [currentCategory, setCurrentCategory] = useState("all");

  return (
    <div className="app">
      <h1 className="header">Products</h1>
      <CategoryList setCurrentCategory={setCurrentCategory} />
      <ProductsList currentCategory={currentCategory} />
    </div>
  );
}

export default App;
