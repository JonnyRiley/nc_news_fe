import React from "react";
import { Link } from "@reach/router";
import VoteAdder from "../Components/VoteAdder";

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
    <li className="li_article_list">
      <h2 className="li_article_title">Title: {title}</h2>
      <p className="li_article_author">Author: {author}</p>
      <p className="li_article_topic">Topic: {topic}</p>
      <VoteAdder comment_id={article_id} votes={votes} />
      <p className="li_article_comments">Comments: {comment_count}</p>
      <Link to={`${article_id}`}>
        <button className="li_article_votes">ReadMore</button>
      </Link>
      <p className="li_article_created_at">Posted at: {created_at}</p>
    </li>
  );
};

export default ArticleTile;
