import React, { Component } from "react";
import IsLoading from "../Components/IsLoading";
import * as Api from "../Api";

class Users extends Component {
  state = {
    users: [],
    isLoading: true
  };
  render() {
    console.log("RENDERING USERS");
    const { users } = this.state;
    if (this.state.isLoading) return IsLoading();
    return (
      <div>
        <label htmlFor="username">Username:</label>
        <select
          onChange={e => this.handleChange(e.target.value, "username")}
          className="usernames"
        >
          <option value="jessjelly">jessjelly</option>
          <option value="happyamy2016">happyamy2016</option>
          <option value="weegembump">weegembump</option>
          <option value="grumpy19">grumpy19</option>
        </select>
        <li className="li_user_list">
          <img
            className="li_user_avatar"
            src={users.avatar_url}
            alt="jessjelly-logo"
          ></img>
          <p className="li_user_name">{users.name}</p>
        </li>
      </div>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };
  componentDidMount() {
    const { username } = this.props;
    Api.FetchUsers(username).then(res => {
      console.log(res);
      this.setState({ users: res, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { username } = this.state;
    if (username !== prevState.username)
      Api.FetchUsers(username).then(res => {
        console.log(res, "HERE");
        return this.setState(currentState => {
          return { users: res, isLoading: false };
        });
      });
  }
}

export default Users;
