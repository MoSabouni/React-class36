import React, { useState, useEffect } from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";
import ProductsList from "./components/ProductsList";

function App() {
  const [activeButton, setActiveButton] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const data = await response.json();
      setCategories(data);
      setIsLoadingCategories(false);
    })();
  }, []);

  return (
    <div className="app">
      <h1 className="header">Products</h1>
      <CategoryList
        setActiveButton={setActiveButton}
        activeButton={activeButton}
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        isLoadingCategories={isLoadingCategories}
      />
      <ProductsList currentCategory={currentCategory} />
    </div>
  );
}

export default App;
