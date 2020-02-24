import React, { Component } from "react";
import ArticleTile from "../Components/ArticleTile";
import * as Api from "../Api";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <main>
        {console.log(this.state)}
        {this.state.articles.map(article => (
          <ArticleTile key={article.article_id} {...article} />
        ))}
      </main>
    );
  }
  componentDidMount() {
    Api.FetchArticles().then(res => {
      this.setState({ articles: res });
    });
  }
}
export default Articles;
