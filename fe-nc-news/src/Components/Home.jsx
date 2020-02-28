import React, { Component } from "react";
import Articles from "../Components/Articles";

class Home extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <Articles />
      </div>
    );
  }
}

export default Home;
