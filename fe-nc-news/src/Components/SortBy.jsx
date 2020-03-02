import React from "react";

function SortBy(props) {
  const { articles, handleChange } = props;
  return (
    <aside>
      <label htmlFor="sortBy">SortBy</label>
      <select
        onChange={e => handleChange(e.target.value, "sortBy")}
        className="sortBy"
      >
        <option value="votes">{articles.votes}votes</option>
        <option value="author">{articles.author}author</option>
        <option value="created_at">{articles.created_at}created_at</option>
        <option value="topic">{articles.topic}topic</option>
        <option value="comment_count">
          {articles.comment_count}comment_count
        </option>
      </select>
    </aside>
  );
}

export default SortBy;
