import React, { Component } from "react";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import ItemAdder from "./ItemAdder";
import VoteAdder from "./VoteAdder";

class CommentsByArticleId extends Component {
  state = {
    comments: [],
    articles: [],
    isLoading: true,
    sortBy: "created_at"
  };
  render() {
    if (this.state.isLoading) return IsLoading();
    const { comments } = this.state;
    console.log(comments, "HEREEE");
    return (
      <div>
        <h1>Comments</h1>
        {/* <li className="li_article_Id_list">
          <p>Body: {article.body}</p>
          <p>Votes: {article.votes}</p>
          <p>Topic: {article.topic}</p>
          <p>Author: {article.author}</p>
          <p>Published at: {article.created_at}</p>
          <p>Comments: {article.comment_count}</p>
        </li> */}
        <ItemAdder addItem={this.addItem} article_id={this.props.article_id} />
        <main className="commentTile"></main>
        {comments.map(comment => {
          return (
            <main key={comment.comment_id} className="li_comment_list">
              <h2> {comment.author} comment about this article</h2>
              <li>
                <p>{comment.body}</p>
                <p>Published at: {comment.created_at}</p>
              </li>
              <VoteAdder
                comment_id={comment.comment_id}
                votes={comment.votes}
              />
            </main>
          );
        })}
      </div>
    );
  }
  addItem = newItem => {
    this.setState(state => {
      return { comments: [newItem, ...state.comments] };
    });
  };
  componentDidMount() {
    const { article_id } = this.props;
    Api.FetchCommentsByArticleId(article_id).then(res => {
      this.setState({ comments: res, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("cdu");

    const { article_id, votes } = this.props;
    if (article_id !== prevProps.article_id || votes !== prevProps.votes)
      Api.FetchArticleById(article_id).then(res => {
        console.log(res, "RESSSS");
        this.setState({ article: res, isLoading: false });
      });
  }
}
export default CommentsByArticleId;
