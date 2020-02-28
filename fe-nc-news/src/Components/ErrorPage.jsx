import React from "react";

const ErrorPage = props => {
  return (
    <div>
      {props.err ? (
        <>
          <h1>{props.err.response.status}</h1>
          <h2>{props.err.response.statusText}</h2>
        </>
      ) : (
        <h1>400 Bad Request</h1>
      )}
    </div>
  );
};

export default ErrorPage;
