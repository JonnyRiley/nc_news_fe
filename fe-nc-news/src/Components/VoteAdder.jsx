import React, { Component } from "react";
import * as Api from "../Api";
import ErrorPage from "./ErrorPage";

class VoteAdder extends Component {
  state = {
    voteDifference: 0,
    err: null,
    youVoted: "Vote here!"
  };
  render() {
    const { err, voteDifference } = this.state;
    if (err) return <ErrorPage err={err} />;
    const { votes } = this.props;
    return (
      <main className="button_votes">
        <button onClick={() => this.handleClick(1)}>👍</button>
        <div>
          <p>Votes: {votes + voteDifference}</p>
          {/* <p>{youVoted}</p> */}
        </div>
        <button className="button_votes_0" onClick={() => this.handleClick(-1)}>
          👎
        </button>
      </main>
    );
  }

  handleClick = inc_votes => {
    const { comment_id, article_id } = this.props;
    this.setState(currentState => {
      return {
        voteDifference: currentState.voteDifference + inc_votes,
        youVoted: "Thanks for voting"
      };
    });
    if (comment_id) {
      Api.patchVotes(inc_votes, comment_id).catch(err => {
        this.setState(currentState => {
          return {
            voteDifference: currentState.voteDifference - inc_votes
          };
        });
      });
    } else if (article_id) {
      Api.patchArticleVotes(inc_votes, article_id).catch(err => {
        this.setState(currentState => {
          return {
            voteDifference: currentState.voteDifference - inc_votes
          };
        });
      });
    }
  };
}

export default VoteAdder;
