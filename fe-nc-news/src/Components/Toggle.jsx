import React, { Component } from "react";

class Toggle extends Component {
  state = {
    isShowing: true,
    displayText: "See less comments!"
  };
  render() {
    const { isShowing, displayText } = this.state;
    const { children } = this.props;
    return (
      <main className="toggle">
        <button className="toggleButton" onClick={this.toggleFunction}>
          {displayText}
        </button>
        {isShowing && <div>{children}</div>}
      </main>
    );
  }
  toggleFunction = () => {
    this.setState(currentState => {
      return {
        isShowing: !currentState.isShowing,
        displayText: "Show more comments!"
      };
    });
  };
}

export default Toggle;
