import React from "react";

function ProductsItem({ item }) {
  return (
    <li key={item.id}>
      <div>
        <img alt={item.description} src={item.image} />
        <span>{item.title}</span>
      </div>
    </li>
  );
}

export default ProductsItem;
