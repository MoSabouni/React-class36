import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RegularHeart } from "../assets/heart-regular.svg";
import { ReactComponent as SolidHeart } from "../assets/heart-solid.svg";
import { FavoriteIdsContext } from "../context/FavoriteIdsContext";

function ProductsItem({ item }) {
  const [favoriteIds, toggleFavoriteId] = useContext(FavoriteIdsContext);
  const favorited = favoriteIds.includes(item.id);

  return (
    <li className="products-item">
      <div className="product">
        <div className="heart-image" onClick={() => toggleFavoriteId(item.id)}>
          {favorited ? <SolidHeart /> : <RegularHeart />}
        </div>

        <Link to={`/product/${item.id}`} className="product-link">
          <img alt={item.title} src={item.image} className="product-image" />
          <span className="product-title">{item.title}</span>
        </Link>
      </div>
    </li>
  );
}

export default ProductsItem;
