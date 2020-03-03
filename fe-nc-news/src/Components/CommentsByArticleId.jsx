import React, { Component } from "react";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import ItemAdder from "./ItemAdder";
import VoteAdder from "./VoteAdder";
import ErrorPage from "./ErrorPage";
class CommentsByArticleId extends Component {
  state = {
    comments: [],
    articles: [],
    isLoading: true,
    sortBy: "created_at",
    err: null
  };
  render() {
    const { err, isLoading, comments } = this.state;
    const { username, article_id } = this.props;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return IsLoading();
    return (
      <div>
        <h1>Comments</h1>
        <ItemAdder
          addItem={this.addItem}
          article_id={article_id}
          username={username}
        />
        <div className="commentTile">
          {comments.map(comment => {
            return (
              <main key={comment.comment_id} className="li_comment_list">
                <h2 className="li_comment_author">
                  {comment.author} comment about this article
                </h2>
                <p className="li_comment_body">{comment.body}</p>
                <p className="li_comment_published">
                  Published at: {new Date(comment.created_at).getDate()}
                  {"-"}
                  {new Date(comment.created_at).getMonth()}
                  {"-"}
                  {new Date(comment.created_at).getFullYear()}
                </p>

                <VoteAdder
                  comment_id={comment.comment_id}
                  votes={comment.votes}
                />
                {username === comment.author ? (
                  <div>
                    <button
                      className="deleteButton"
                      onClick={() => this.handleDelete(comment.comment_id)}
                    >
                      Delete Comment!
                    </button>
                  </div>
                ) : (
                  <p></p>
                )}
              </main>
            );
          })}
        </div>
      </div>
    );
  }
  handleDelete = comment_id => {
    Api.deleteCommentById(comment_id)
      .then(newlyDeleteComment => {
        this.removeComment(comment_id);
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  addItem = newItem => {
    this.setState(state => {
      return { comments: [newItem, ...state.comments] };
    });
  };
  removeComment = commentIdToDelete => {
    return this.setState(currentState => {
      return {
        comments: [...currentState.comments].filter(
          comment => comment.comment_id !== commentIdToDelete
        )
      };
    });
  };

  componentDidMount() {
    const { article_id } = this.props;
    Api.FetchCommentsByArticleId(article_id)
      .then(res => {
        this.setState({ comments: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const { comments } = this.state;
    const { article_id, votes } = this.props;
    if (
      article_id !== prevProps.article_id ||
      votes !== prevProps.votes ||
      comments !== prevState.comments
    ) {
      Api.FetchArticleById(article_id)
        .then(res => {
          this.setState({ article: res, isLoading: false });
        })
        .catch(err => {
          this.setState({ err });
        });
    }
  }
}

export default CommentsByArticleId;
