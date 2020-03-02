import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <button className="navHome">Home</button>
      </Link>
      <Link to="/articles">
        <button className="navArticles">Articles</button>
      </Link>
    </nav>
  );
};

export default Nav;
