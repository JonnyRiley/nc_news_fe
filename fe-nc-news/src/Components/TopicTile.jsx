import React, { Component } from "react";

import ErrorPage from "./ErrorPage";
class TopicTile extends Component {
  state = {
    topics: [],
    filterTopicsBy: null,
    sortBy: null,
    articles: []
  };
  render() {
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <aside className="TopicTile">
        <h1>Topics</h1>
        <main>
          <label htmlFor="selectTopic">Select Topic</label>
          <select onChange={this.props.getEachTopic}>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
        </main>
      </aside>
    );
  }
}
export default TopicTile;
