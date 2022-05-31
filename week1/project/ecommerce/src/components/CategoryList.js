import React from "react";
import categoriesData from "../fake-data/all-categories";

function CategoryList({ setCategory }) {
  return (
    <div>
      {categoriesData.map((item) => {
        return (
          <button
            key={item.substring(6)}
            onClick={() => {
              setCategory(item.substring(6));
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
