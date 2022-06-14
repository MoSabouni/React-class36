import React, { useState, createContext } from "react";

export const FavoriteIdsContext = createContext();

export const FavoriteIdsProvider = (props) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavoriteId = (id) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((value) => value !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };
  console.log(favoriteIds);

  return (
    <FavoriteIdsContext.Provider value={[favoriteIds, toggleFavoriteId]}>
      {props.children}
    </FavoriteIdsContext.Provider>
  );
};
