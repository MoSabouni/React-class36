import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FavoriteIdsContext } from "../context/FavoriteIdsContext";
import { ReactComponent as RegularHeart } from "../assets/heart-regular.svg";
import { ReactComponent as SolidHeart } from "../assets/heart-solid.svg";
import Header from "./Header";

function ProductDetails() {
  const { id } = useParams();
  const [favoriteIds, toggleFavoriteId] = useContext(FavoriteIdsContext);
  const favorited = favoriteIds.includes(+id);

  const [product, loading, error] = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) return <div>Loading product details...</div>;

  if (error) return <div>Error loading product details : {error}</div>;

  return (
    <div className="app">
      <Header mainTitle={product.title} />
      <div className="heart-image" onClick={() => toggleFavoriteId(+id)}>
        {favorited ? <SolidHeart /> : <RegularHeart />}
      </div>
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
