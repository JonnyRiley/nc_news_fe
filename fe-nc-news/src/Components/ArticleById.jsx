import React, { Component } from "react";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";

class ArticleById extends Component {
  state = {
    article: [],
    isLoading: true
  };
  render() {
    if (this.state.isLoading) return IsLoading();
    console.log(this.state);
    const { article } = this.state;
    return (
      <main>
        <li>
          <p>Title: {article.title}</p>
          <p>Body: {article.body}</p>
          <p>Votes: {article.votes}</p>
          <p>Topic: {article.topic}</p>
          <p>Author: {article.author}</p>
          <p>Published at: {article.created_at}</p>
          <p>Comments: {article.comment_count}</p>
        </li>
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
