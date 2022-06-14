import React, { useContext } from "react";
import Header from "./Header";
import { FavoriteIdsContext } from "../context/FavoriteIdsContext";
import useMultipleFetch from "../hooks/useMultipleFetch";
import ProductsItem from "./ProductsItem";

const FavoritesList = () => {
  const [favoriteIds] = useContext(FavoriteIdsContext);

  const [favoriteProducts, loading, error] = useMultipleFetch(
    `https://fakestoreapi.com/products/`,
    favoriteIds
  );

  console.log(favoriteProducts);
  if (loading)
    return (
      <div>
        <Header path={"/favorite"} /> Loading favorite products...{" "}
      </div>
    );

  if (error) return <div>Error loading favorite products : {error}</div>;

  return (
    <div>
      <Header mainTitle={"Favorite products"} />
      <ul className="products-list">
        {favoriteProducts.map((item) => {
          return <ProductsItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default FavoritesList;
