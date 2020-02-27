import React, { Component } from "react";
import * as Api from "../Api";
import DeleteComment from "./DeleteComment";
class ItemAdder extends Component {
  state = {
    username: "jessjelly",
    body: ""
  };
  render() {
    console.log("rendering");
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={e => this.handleChange(e.target.value, "username")}
        />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          onChange={e => this.handleChange(e.target.value, "body")}
        />
        <button>Add Comment</button>
        <DeleteComment removeComment={this.removeComment} />
      </form>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { article_id } = this.props;
    console.log(this.props, "PROPS IN ADDER");
    const { username, body } = this.state;
    // const { postAnItem } = this.props;
    Api.postAnItem(article_id, { username, body }).then(newlyPostedItem => {
      console.log(newlyPostedItem, "NEWITEM");
      this.props.addItem(newlyPostedItem);
    });
  };
  removeComment = comment_id => {
    return this.setState(currentState => {
      console.log({ currentState });
      return {
        comments: [...currentState.comments].filter(
          comment => currentState.comments[comment_id] !== comment
        )
      };
    });
  };
}
export default ItemAdder;
