import React, { useState } from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";
import ProductsList from "./components/ProductsList";

function App() {
  const [category, setCategory] = useState("all");
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="App">
      <h1 className="header">Products</h1>
      <CategoryList
        setCategory={setCategory}
        category={category}
        setActiveButton={setActiveButton}
        activeButton={activeButton}
      />
      <ProductsList category={category} />
    </div>
  );
}

export default App;
