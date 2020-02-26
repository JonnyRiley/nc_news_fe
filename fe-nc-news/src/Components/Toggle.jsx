import React, { Component } from "react";

class Toggle extends Component {
  state = {
    isShowing: true
  };
  render() {
    return (
      <main>
        <button onClick={this.toggleFunction}>Toggle</button>
        {this.state.isShowing && <div>{this.props.children}</div>}
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
