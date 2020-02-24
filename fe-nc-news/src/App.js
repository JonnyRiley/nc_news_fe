import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import ArticleById from "./Components/ArticleById";
import { Router } from "@reach/router";
class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Nav />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <ArticleById path="articles/:article_id" />
        </Router>
      </main>
    );
  }
}
export default App;
