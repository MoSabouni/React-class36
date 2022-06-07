import React, { useState } from "react";

function CategoryList({ categories, setCurrentCategory, loading, error }) {
  const [activeButton, setActiveButton] = useState(null);

  const toggleActiveStyle = (index) => {
    return activeButton === index
      ? "categories-btn active"
      : "categories-btn inactive";
  };

  const toggleActive = (category, index) => {
    if (activeButton === index) {
      setCurrentCategory("all");
      setActiveButton(null);
    } else {
      setCurrentCategory(category);
      setActiveButton(index);
    }
  };

  if (loading) return <div> Loading categories... </div>;

  if (error) return <div>Error loading categories : {error}</div>;

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={toggleActiveStyle(index)}
            onClick={() => {
              toggleActive(category, index);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryList;
