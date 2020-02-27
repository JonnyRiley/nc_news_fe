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
      <li className="li_article_list">
        <h2 className="li_article_title">Title: {title}</h2>
        <p className="li_article_author">Author: {author}</p>
        <p className="li_article_topic">Topic: {topic}</p>
        <p className="li_article_votes">Votes: {votes}</p>
        <p className="li_article_comments">Comments: {comment_count}</p>
        <p className="li_article_created_at">Posted at: {created_at}</p>
      </li>
    </Link>
  );
};

export default ArticleTile;
