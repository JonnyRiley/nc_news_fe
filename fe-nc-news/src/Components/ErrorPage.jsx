import React, { Component } from "react";

class ErrorPage extends Component {
  state = {
    stuff: null,
    err: null
  };
  render() {
    console.log(this.props);
    // const { data, status } = this.props;
    return (
      <div>
        <h1>Error</h1>
        {/* <p> {data.msg}</p>
        <p> {status}</p> */}
      </div>
    );
  }

  // fetchContent = () => {
  //   getData()
  //     .then(stuff => {
  //       // stuff
  //     })
  //     .catch(err => {
  //       this.setState({
  //         err
  //       });
  //     });
  // };
  // render() {
  //   const { err, stuff } = this.state;
  //   if (err) return <Err />;
  //   return <Stuff />;
  // }
}

export default ErrorPage;
