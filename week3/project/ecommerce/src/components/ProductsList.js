import React from "react";
import ProductsItem from "./ProductsItem";
import useFetch from "../hooks/useFetch";

function ProductsList({ currentCategory }) {
  const url =
    currentCategory === "all"
      ? `https://fakestoreapi.com/products`
      : `https://fakestoreapi.com/products/category/${currentCategory}`;

  const [products, loading, error] = useFetch(url);

  if (loading) return <div> Loading products... </div>;

  if (error) return <div>Error loading products : {error}</div>;

  return (
    <div>
      <ul className="products-list">
        {products.map((item) => {
          return <ProductsItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default ProductsList;
