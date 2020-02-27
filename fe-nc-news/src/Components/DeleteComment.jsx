import React, { Component } from "react";
import * as Api from "../Api";

class DeleteComment extends Component {
  render() {
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
    Api.deleteCommentById(comment_id).then(newlyDeleteComment => {
      removeComment(comment_id);
    });
  };
}
export default DeleteComment;
