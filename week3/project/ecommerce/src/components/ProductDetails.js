import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function ProductDetails() {
  const { id } = useParams();

  const [product, loading, error] = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) return <div>Loading product details...</div>;

  if (error) return <div>Error loading product details : {error}</div>;

  return (
    <div className="app">
      <h1>{product.title}</h1>
      <div className="product-details-container">
        <img
          alt={product.title}
          src={product.image}
          className="product-details-image"
        />
        <p className="product-details-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
