import React, { Component } from "react";
import * as Api from "../Api";
import ErrorPage from "./ErrorPage";

class DeleteComment extends Component {
  state = {
    err: null
  };
  render() {
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <div className="deleteButton">
        <button onClick={this.handleDelete}> Delete Comment!</button>
      </div>
    );
  }
  handleDelete = e => {
    const { removeComment } = this.props;
    e.preventDefault();
    const { comment_id } = this.props;
    Api.deleteCommentById(comment_id)
      .then(newlyDeleteComment => {
        removeComment(comment_id);
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}
export default DeleteComment;
