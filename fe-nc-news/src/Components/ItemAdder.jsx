import React, { Component } from "react";
import * as Api from "../Api";
import ErrorPage from "./ErrorPage";
class ItemAdder extends Component {
  state = {
    username: "jessjelly",
    body: "",
    err: null
  };
  render() {
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="body"></label>
        <input
          type="text"
          id="body"
          size="80"
          required
          onChange={e => this.handleChange(e.target.value, "body")}
        />
        <button className="postButton">Post Comment</button>
      </form>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { article_id, username, addItem } = this.props;
    const { body } = this.state;
    Api.postAnItem(article_id, { username, body })
      .catch(err => {
        this.setState({ err });
      })
      .then(newlyPostedItem => {
        addItem(newlyPostedItem);
      });
  };
}
export default ItemAdder;
