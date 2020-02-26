import React from "react";
import { Link } from "@reach/router";

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
    <Link to={`${article_id}`}>
      <div>
        <li className="li_article_list">
          <p>Title: {title}</p>
          <p>Author: {author}</p>
          <p>Topic: {topic}</p>
          <p>Votes: {votes}</p>
          <p>Comments: {comment_count}</p>
          <p>Posted at: {created_at}</p>
        </li>
      </div>
    </Link>
  );
};

export default ArticleTile;
