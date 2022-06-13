import React from "react";
import { Link } from "react-router-dom";

function ProductsItem({ item }) {
  return (
    <li className="products-item">
      <div className="product">
        <Link to={`/product/${item.id}`} className="product-link">
          <img alt={item.title} src={item.image} className="product-image" />
          <span className="product-title">{item.title}</span>
        </Link>
      </div>
    </li>
  );
}

export default ProductsItem;
