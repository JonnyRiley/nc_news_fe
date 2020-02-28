import React, { Component } from "react";

// const ErrorPage = () => {
//   const { data, status } = this.props.err;
//   return (
//     <div>
//       <p> {data.msg}</p>
//       <p> {status}</p>
//     </div>
//   );
// };
class ErrorPage extends Component {
  state = {
    stuff: null,
    err: null
  };
  componentDidMount = () => {
    this.fetchContent();
  };

  fetchContent = () => {
    getData()
      .then(stuff => {
        // stuff
      })
      .catch(err => {
        this.setState({
          err
        });
      });
  };
  render() {
    const { err, stuff } = this.state;
    if (err) return <Err />;
    return <Stuff />;
  }
}

export default ErrorPage;
