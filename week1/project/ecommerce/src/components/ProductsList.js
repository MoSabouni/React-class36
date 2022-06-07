import React, { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";

function ProductsList({ currentCategory }) {
  const [products, setProducts] = useState([]);
  const [isLoadingProdcuts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    (async () => {
      let response;
      setIsLoadingProducts(true);
      if (currentCategory === "all") {
        response = await fetch(`https://fakestoreapi.com/products`);
      } else {
        response = await fetch(
          `https://fakestoreapi.com/products/category/${currentCategory}`
        );
      }
      const data = await response.json();
      setProducts(data);
      setIsLoadingProducts(false);
    })();
  }, [currentCategory]);

  return (
    <div>
      {isLoadingProdcuts ? (
        <div> Loading products </div>
      ) : (
        <ul className="products-list">
          {products.map((item) => {
            return <ProductsItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default ProductsList;
