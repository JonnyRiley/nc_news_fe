import React, { Component } from "react";
import ArticleTile from "../Components/ArticleTile";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import SortBy from "./SortBy";
import ErrorPage from "./ErrorPage";

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
    if (err) return <ErrorPage />;
    const { articles, sortBy } = this.state;
    return (
      <div>
        <h1>Articles</h1>
        {/* <Toggle>
          <TopicTile getEachTopic={this.getEachTopic} />
        </Toggle> */}
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
    console.log(event.target.value, "EVVENTT");
    return this.setState(currentState => {
      return { sortBy: target.value };
    });
  };

  // getEachTopic = event => {
  //   const { target } = event;
  //   return this.setState(currentState => {
  //     return { filterTopicsBy: target.value };
  //   });
  // };

  componentDidMount() {
    console.log("mounting");
    Api.FetchArticles()
      .then(res => {
        this.setState({ articles: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props, "Props");
    const { sortBy, filterTopicsBy } = this.state;
    //console.log(sortBy !== prevState.sortBy, "StateUpdate");
    if (sortBy !== prevState.sortBy)
      Api.FetchArticles(sortBy, filterTopicsBy)
        .then(res => {
          console.log(res, "HERE");
          return this.setState(currentState => {
            return { articles: res, sortBy: sortBy, isLoading: false };
          });
        })
        .catch(err => {
          this.setState({ err });
        });
  }
}

export default Articles;
