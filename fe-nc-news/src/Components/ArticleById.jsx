import React, { Component } from "react";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import Toggle from "./Toggle";
import CommentsByArticleId from "../Components/CommentsByArticleId";
import VoteAdder from "../Components/VoteAdder";
import ErrorPage from "./ErrorPage";

class ArticleById extends Component {
  state = {
    article: [],
    isLoading: true,
    err: null
  };
  render() {
    const { article, err, isLoading } = this.state;
    if (err) return <ErrorPage />;
    if (isLoading) return IsLoading();

    return (
      <main className="article_Id_Tile">
        <h1 className="articleIdH1">{article.title}</h1>
        <li className="li_article_Id_list">
          <h2 className="li_article_Id_topic">{article.topic}: Article</h2>
          <p className="li_article_Id_body">{article.body}</p>
          <VoteAdder
            className="button_votes"
            article_id={article.article_id}
            votes={article.votes}
          />
          <p className="li_article_Id_author">Author: {article.author}</p>
          <p className="li_article_Id_comments">
            Comments: {article.comment_count}
          </p>

          <p className="li_article_Id_createdAt">
            Published at: {article.created_at}
          </p>
        </li>

        <Toggle>
          <CommentsByArticleId article_id={article.article_id} {...article} />
        </Toggle>
      </main>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;

    Api.FetchArticleById(article_id)
      .then(res => {
        this.setState({ article: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    if (article_id !== prevProps.article_id)
      Api.FetchArticleById(article_id)
        .then(res => {
          this.setState({ article: res, isLoading: false });
        })
        .catch(err => {
          this.setState({ err });
        });
  }
}
export default ArticleById;
