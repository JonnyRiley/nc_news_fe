import React from "react";

const ErrorPage = () => {
  const { data, status } = this.props.err;
  return (
    <div>
      <p> {data.msg}</p>
      <p> {status}</p>
    </div>
  );
};
export default ErrorPage;
