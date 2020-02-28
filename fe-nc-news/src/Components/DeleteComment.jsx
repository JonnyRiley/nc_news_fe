import React, { Component } from "react";
import * as Api from "../Api";
import ErrorPage from "./ErrorPage";

class DeleteComment extends Component {
  state = {
    err: null
  };
  render() {
    const { err } = this.state;
    if (err) return <ErrorPage />;
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
    console.log(comment_id, "comment_id");
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
