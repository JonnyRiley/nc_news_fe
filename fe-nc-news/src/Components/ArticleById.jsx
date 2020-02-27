import React, { Component } from "react";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import { Link } from "@reach/router";
import Toggle from "./Toggle";
import CommentsByArticleId from "../Components/CommentsByArticleId";

class ArticleById extends Component {
  state = {
    article: [],
    isLoading: true
  };
  render() {
    if (this.state.isLoading) return IsLoading();
    console.log(this.state, "STATE ID");
    const { article } = this.state;
    return (
      <main className="article_Id_Tile">
        <h1>{article.title}</h1>
        <li className="li_article_Id_list">
          <p>Body: {article.body}</p>
          <p>Votes: {article.votes}</p>
          <p>Topic: {article.topic}</p>
          <p>Author: {article.author}</p>
          <p>Published at: {article.created_at}</p>
          <Link to={"comments"}>
            <p>Comments: {article.comment_count}</p>
          </Link>
        </li>

        <Toggle>
          <CommentsByArticleId article_id={article.article_id} {...article} />
        </Toggle>
      </main>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;

    Api.FetchArticleById(article_id).then(res => {
      this.setState({ article: res, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    if (article_id !== prevProps.article_id)
      Api.FetchArticleById(article_id).then(res => {
        this.setState({ article: res, isLoading: false });
      });
  }
}
export default ArticleById;
