import React, { Component } from "react";
import * as Api from "../Api";
import ErrorPage from "./ErrorPage";

class Users extends Component {
  state = {
    users: [],
    err: null
  };
  render() {
    const { err, users } = this.state;
    const { handleChange } = this.props;
    if (err) return <ErrorPage err={err} />;
    return (
      <main className="usersGrid">
        <label className="login_text" htmlFor="username">
          Logged In as:
        </label>
        <select
          onChange={e => handleChange(e.target.value, "username")}
          className="usernames"
        >
          <option value="jessjelly">jessjelly</option>
          <option value="happyamy2016">happyamy2016</option>
          <option value="weegembump">weegembump</option>
          <option value="grumpy19">grumpy19</option>
        </select>
        <img
          className="img_user_avatar"
          src={users.avatar_url}
          alt="jessjelly-logo"
        ></img>
      </main>
    );
  }
  componentDidMount() {
    const { username } = this.props;
    Api.FetchUsers(username)
      .then(res => {
        this.setState({ users: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
  componentDidUpdate(prevProps) {
    const { username } = this.props;
    if (username !== prevProps.username)
      Api.FetchUsers(username)
        .then(res => {
          return this.setState({ users: res, isLoading: false });
        })
        .catch(err => {
          this.setState({ err });
        });
  }
}
export default Users;
