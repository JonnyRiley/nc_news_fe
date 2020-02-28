import React, { Component } from "react";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import ItemAdder from "./ItemAdder";
import VoteAdder from "./VoteAdder";
import DeleteComment from "./DeleteComment";
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
    const { err, isLoading } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return IsLoading();
    const { comments } = this.state;
    const { username, article_id } = this.props;
    return (
      <div>
        <h1>Comments</h1>
        <ItemAdder
          addItem={this.addItem}
          article_id={article_id}
          username={username}
        />
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
              <DeleteComment
                removeComment={this.removeComment}
                comment_id={comment.comment_id}
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
  removeComment = commentIdToDelete => {
    console.log("REMOVECOMMEnt");
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
        console.log(err, "err");
        this.setState({ err });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("cdu");
    const { comments } = this.state;
    const { article_id, votes } = this.props;
    if (
      article_id !== prevProps.article_id ||
      votes !== prevProps.votes ||
      comments !== prevState.comments
    ) {
      Api.FetchArticleById(article_id)
        .then(res => {
          console.log(res, "RESSSS");
          this.setState({ article: res, isLoading: false });
        })
        .catch(err => {
          console.log(err, "err");
          this.setState({ err });
        });
    }
    // else if (comments !== prevState.comments) {

    //     this.setState({ isLoading: false, comments: res });
    //   });
  }
}

//   componentDidUpdate(prevProps, prevState) {
//     console.log("cdu");

//     const { article_id, votes } = this.props;
//     if (article_id !== prevProps.article_id || votes !== prevProps.votes)
//       Api.FetchArticleById(article_id).then(res => {
//         console.log(res, "RESSSS");
//         this.setState({ article: res, isLoading: false });
//       });
//   }
// }
export default CommentsByArticleId;
