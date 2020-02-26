import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import ArticleById from "./Components/ArticleById";
import { Router } from "@reach/router";
import CommentsByArticleId from "./Components/CommentsByArticleId";
import SortBy from "./Components/SortBy";
import TopicTile from "./Components/TopicTile";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Nav />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <SortBy path="/articles" />
          <ArticleById path="articles/:article_id" />
          <TopicTile path="/topics" />
          <CommentsByArticleId path="articles/:article_id/comments/*" />
        </Router>
      </main>
    );
  }
}
export default App;
