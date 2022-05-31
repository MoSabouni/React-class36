import React from "react";
import productsData from "../fake-data/all-products";
import ProductsItem from "./ProductsItem";

function ProductsList({ category }) {
  const filteredProducts = filterProducts(productsData, category);
  return (
    <div>
      <ul className="products-list">
        {filteredProducts.map((item) => {
          return <ProductsItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

const filterProducts = (productsData, category) => {
  let filteredProducts;
  if (category !== "all") {
    filteredProducts = productsData.filter(
      (item) => item.category === category
    );
  } else {
    filteredProducts = productsData;
  }

  return filteredProducts;
};

export default ProductsList;
