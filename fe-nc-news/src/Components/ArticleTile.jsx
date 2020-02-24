import React from "react";

const ArticleTile = ({
  author,
  title,
  article_id,
  topic,
  created_at,
  votes,
  comment_count
}) => {
  return (
    <div>
      <li>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
        <p>Title: {title}</p>
        <p>Votes: {votes}</p>
        <p>Comments: {comment_count}</p>
        <p>Posted at: {created_at}</p>
      </li>
    </div>
  );
};

export default ArticleTile;
