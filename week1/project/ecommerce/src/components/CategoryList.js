import React from "react";

function CategoryList({
  setActiveButton,
  activeButton,
  categories,
  setCurrentCategory,
  isLoadingCategories,
}) {
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

  return (
    <div>
      {isLoadingCategories ? (
        <div> Loading categories </div>
      ) : (
        categories.map((category, index) => {
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
        })
      )}
    </div>
  );
}

export default CategoryList;
