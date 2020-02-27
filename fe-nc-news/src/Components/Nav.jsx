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
      <Link to="/topics">
        <button className="navTopics">Topics</button>
      </Link>
      <Link to="/users">
        <button className="navUser">Users</button>
      </Link>
    </nav>
  );
};

export default Nav;
