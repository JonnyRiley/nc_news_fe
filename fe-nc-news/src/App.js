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
import Users from "./Components/Users";

class App extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { username } = this.state;
    return (
      <main className="mainApp">
        <Header />
        <Nav username={username} />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <SortBy path="/articles" />
          <ArticleById path="articles/:article_id" />
          <TopicTile path="/topics" />
          <CommentsByArticleId
            path="articles/:article_id/comments/*"
            username={username}
          />
          <Users path="/users/:username" username={username} />
        </Router>
      </main>
    );
  }
}
export default App;
