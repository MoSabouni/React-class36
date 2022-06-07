import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [isLoadingProdcut, setIsLoadingProduct] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoadingProduct(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setIsLoadingProduct(false);
    })();
  }, []);

  return (
    <div>
      {isLoadingProdcut ? (
        <div> Loading product </div>
      ) : (
        <div className="app">
          <h1>{product.title}</h1>
          <div className="product-details-container">
            <img
              alt={product.description}
              src={product.image}
              className="product-details-img"
            />
            <p className="product-details-description">{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
