import React, { Component } from "react";
import ArticleTile from "../Components/ArticleTile";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import SortBy from "./SortBy";
import ErrorPage from "./ErrorPage";
import TopicTile from "./TopicTile";
import Toggle from "./Toggle";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: null,
    filterTopicsBy: null,
    err: null
  };
  render() {
    const { err, isLoading } = this.state;
    if (isLoading) return IsLoading();
    if (err) return <ErrorPage err={err} />;
    const { articles, sortBy } = this.state;
    return (
      <div>
        <h1>Articles</h1>
        <Toggle>
          <TopicTile getEachTopic={this.getEachTopic} />
        </Toggle>
        <SortBy
          handleChange={this.handleChange}
          articles={articles}
          sortBy={sortBy}
        />

        <main className="articleTile">
          {this.state.articles.map(article => (
            <ArticleTile key={article.article_id} {...article} />
          ))}
        </main>
      </div>
    );
  }
  handleChange = event => {
    const { target } = event;
    return this.setState(currentState => {
      return { sortBy: target.value };
    });
  };

  getEachTopic = event => {
    const { target } = event;
    return this.setState(currentState => {
      return { filterTopicsBy: target.value };
    });
  };

  componentDidMount() {
    Api.FetchArticles()
      .then(res => {
        this.setState({ articles: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortBy, filterTopicsBy } = this.state;
    if (
      sortBy !== prevState.sortBy ||
      filterTopicsBy !== prevState.filterTopicsBy
    )
      Api.FetchArticles(sortBy, filterTopicsBy)
        .then(res => {
          return this.setState(currentState => {
            return {
              articles: res,
              filterTopicsBy: filterTopicsBy,
              sortBy: sortBy,
              isLoading: false
            };
          });
        })
        .catch(err => {
          this.setState({ err });
        });
  }
}

export default Articles;
