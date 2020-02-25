import React, { Component } from "react";
import ArticleTile from "../Components/ArticleTile";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };
  render() {
    if (this.state.isLoading) return IsLoading();

    return (
      <main className="articleTile">
        {this.state.articles.map(article => (
          <ArticleTile key={article.article_id} {...article} />
        ))}
      </main>
    );
  }
  componentDidMount() {
    Api.FetchArticles().then(res => {
      this.setState({ articles: res, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.articles, "current");
    console.log(prevState.articles, "prev");
    if (this.state === prevState)
      Api.FetchArticles().then(res => {
        this.setState({ articles: res, isLoading: false });
      });
  }
}
export default Articles;
