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

    console.log("rendering");
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <select
          onChange={e => this.handleChange(e.target.value, "username")}
          className="usernames"
        >
          <option value="jessjelly">jessjelly</option>
          <option value="happyamy2016">happyamy2016</option>
          <option value="weegembump">weegembump</option>
          <option value="grumpy19">grumpy19</option>
        </select>

        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          onChange={e => this.handleChange(e.target.value, "body")}
        />
        <button>Add Comment</button>
      </form>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text, isLoading: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { article_id } = this.props;
    const { username, body } = this.state;
    Api.postAnItem(article_id, { username, body })
      .catch(err => {
        this.setState({ err });
      })
      .then(newlyPostedItem => {
        console.log(newlyPostedItem, "NEWITEM");
        this.props.addItem(newlyPostedItem);
      });
  };
}
export default ItemAdder;
