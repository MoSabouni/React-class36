import React from "react";
import productsData from "../fake-data/all-products";
import ProductsItem from "./ProductsItem";

function ProductsList({ category }) {
  const filterProducts = () => {
    return category === "all"
      ? productsData
      : productsData.filter((item) => item.category === category);
  };

  return (
    <div>
      <ul className="products-list">
        {filterProducts().map((item) => {
          return <ProductsItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default ProductsList;
