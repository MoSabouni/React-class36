import React from "react";
import categoriesData from "../fake-data/all-categories";

function CategoryList({ setCategory, setActiveButton, activeButton }) {
  const toggleActiveStyle = (index) => {
    if (activeButton === index) {
      return "categories-btn active";
    } else {
      return "categories-btn inactive";
    }
  };

  const toggleActive = (index, item) => {
    if (activeButton === index) {
      setCategory("all");
      setActiveButton(null);
    } else {
      setCategory(item.substring(6));
      setActiveButton(index);
    }
  };

  return (
    <div>
      {categoriesData.map((item, index) => {
        return (
          <button
            key={index}
            className={toggleActiveStyle(index)}
            onClick={() => {
              toggleActive(index, item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryList;
