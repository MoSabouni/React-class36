import React from "react";

function ProductsItem({ item }) {
  return (
    <li className="products-item">
      <div className="product">
        <img
          alt={item.description}
          src={item.image}
          className="product-image"
        />
        <span className="product-title">{item.title}</span>
      </div>
    </li>
  );
}

export default ProductsItem;
