import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
      <Link to="/topics">
        <button>Topics</button>
      </Link>
      <Link to="/users">
        <button>Users</button>
      </Link>
    </nav>
  );
};

export default Nav;
