import React, { useState } from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";
import ProductsList from "./components/ProductsList";
import useFetch from "./hooks/useFetch";

function App() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  const { loading, error } = useFetch(
    `https://fakestoreapi.com/products/categories`,
    setCategories
  );

  return (
    <div className="app">
      <h1 className="header">Products</h1>
      <CategoryList
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        loading={loading}
        error={error}
      />
      <ProductsList currentCategory={currentCategory} />
    </div>
  );
}

export default App;
