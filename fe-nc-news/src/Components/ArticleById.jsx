import React, { Component } from "react";
import * as Api from "../Api";

class ArticleById extends Component {
  state = {
    article: []
  };
  render() {
    console.log(this.state);
    const { article } = this.state;
    return (
      <main>
        <p>Title: {article.title}</p>
        <p>Body: {article.body}</p>
        <p>Votes: {article.votes}</p>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Published at: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>
      </main>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    Api.FetchArticleById(article_id).then(res => {
      this.setState({ article: res });
    });
  }
}
export default ArticleById;
