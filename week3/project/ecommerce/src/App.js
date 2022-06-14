import React, { useState } from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";

function App() {
  const [currentCategory, setCurrentCategory] = useState("all");

  return (
    <div className="app">
      <Header />
      <CategoryList setCurrentCategory={setCurrentCategory} />
      <ProductsList currentCategory={currentCategory} />
    </div>
  );
}

export default App;
