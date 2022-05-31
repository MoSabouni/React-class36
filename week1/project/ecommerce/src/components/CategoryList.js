import React from "react";
import categoriesData from "../fake-data/all-categories";

function CategoryList({ setCategory, setActiveButton, activeButton }) {
  return (
    <div>
      {categoriesData.map((item, index) => {
        return (
          <button
            key={index}
            className={toggleActiveStyle(index, activeButton)}
            onClick={() => {
              toggleActive(
                index,
                activeButton,
                setCategory,
                setActiveButton,
                item
              );
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

const toggleActiveStyle = (index, activeButton) => {
  if (activeButton === index) {
    return "categories-btn active";
  } else {
    return "categories-btn inactive";
  }
};

const toggleActive = (
  index,
  activeButton,
  setCategory,
  setActiveButton,
  item
) => {
  if (activeButton === index) {
    setCategory("all");
    setActiveButton(null);
  } else {
    setCategory(item.substring(6));
    setActiveButton(index);
  }
};

export default CategoryList;
