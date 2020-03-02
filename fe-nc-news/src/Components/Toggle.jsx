import React, { Component } from "react";

class Toggle extends Component {
  state = {
    isShowing: true
  };
  render() {
    const { isShowing } = this.state;
    const { children } = this.props;
    return (
      <main>
        <button onClick={this.toggleFunction}>See more comments!</button>
        {isShowing && <div>{children}</div>}
      </main>
    );
  }
  toggleFunction = () => {
    this.setState(currentState => {
      return { isShowing: !currentState.isShowing };
    });
  };
}

export default Toggle;
