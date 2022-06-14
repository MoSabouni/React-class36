import React from "react";
import { Link } from "react-router-dom";

const Header = ({ mainTitle = "Products" }) => {
  return (
    <div className="header-container">
      <h1 className="header">{mainTitle}</h1>
      <div className="links-container">
        <Link to={`/`}>Products</Link>
        <Link to={`/favorites`}>Favorites</Link>
      </div>
    </div>
  );
};

export default Header;
