import React from "react";

const DeleteComment = () => {
  console.log(this.props);
  const { removeComment } = this.props;
  return (
    <div className="deleteButton">
      <button>{removeComment}Delete Comment!</button>
    </div>
  );
};
export default DeleteComment;
