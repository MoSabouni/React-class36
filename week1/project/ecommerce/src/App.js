import React, { useState } from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";
import ProductsList from "./components/ProductsList";
import productsData from "./fake-data/all-products";
import categoriesData from "./fake-data/all-categories";

function App() {
  const [category, setCategory] = useState("all");
  return (
    <div className="App">
      <h1>Products</h1>
      <CategoryList setCategory={setCategory} category={category} />
      <ProductsList category={category} />
    </div>
  );
}

export default App;
