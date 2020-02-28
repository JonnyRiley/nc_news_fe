import React, { Component } from "react";
import IsLoading from "../Components/IsLoading";

class SortBy extends Component {
  state = {
    sortBy: null
  };
  render() {
    if (this.state.isLoading) return IsLoading();
    const { articles } = this.props;

    return (
      <main>
        <label htmlFor="sortBy">SortBy</label>
        <select onChange={this.props.handleChange} id="sortBy">
          <option value="votes">{articles.votes}votes</option>
          <option value="author">{articles.author}author</option>
          <option value="created_at">{articles.created_at}created_at</option>
          <option value="topic">{articles.topic}topic</option>
          <option value="comment_count">
            {articles.comment_count}comment_count
          </option>
        </select>
      </main>
    );
  }
}
export default SortBy;
