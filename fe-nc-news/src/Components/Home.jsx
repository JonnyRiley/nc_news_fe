import React, { Component } from "react";
import BreakingNews from "./breaking-news.png";
import { Link } from "@reach/router";
class Home extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <h1>Breaking News!</h1>
        <Link to="/articles">
          <img
            className="img_home_BNews"
            src={BreakingNews}
            alt="breakingNews"
          ></img>
        </Link>
      </div>
    );
  }
}

export default Home;
