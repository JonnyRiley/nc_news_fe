import React, { Component } from "react";
import * as Api from "../Api";
import ErrorPage from "../ErrorPage";

class VoteAdder extends Component {
  state = {
    voteDifference: 0,
    err: null
  };
  render() {
    const { err } = this.state;
    {
      if (err) return ErrorPage(err);
    }
    const { votes, article_id } = this.props;

    return (
      <main>
        <button onClick={() => this.handleClick(1)}>VoteUp</button>
        <p>Votes: {votes + this.state.voteDifference}</p>
        <button onClick={() => this.handleClick(-1)}>VoteDown</button>
      </main>
    );
  }

  handleClick = inc_votes => {
    const { article_id } = this.props;
    this.setState(currentState => {
      return {
        voteDifference: currentState.voteDifference + inc_votes
      };
    });

    Api.patchArticleVotes(inc_votes, article_id).catch(err => {
      this.setState(currentState => {
        return {
          voteDifference: currentState.voteDifference - inc_votes
        };
      });
    });
  };
}
export default VoteAdder;
