import React, { Component } from "react";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import Articles from "./Articles";
import ErrorPage from "./ErrorPage";
class TopicTile extends Component {
  state = {
    topics: [],
    filterTopicsBy: null,
    sortBy: null,
    articles: []
  };
  render() {
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <aside className="TopicTile">
        <h1>Topics</h1>
        <main>
          <label htmlFor="selectTopic">Select Topic</label>
          <select onChange={this.props.getEachTopic}>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
        </main>
        {/* {topics.map(topic => (
          <ul key={topic.slug} className="li_topic_list">
          <li>{topic.slug}</li>
          </ul>
        ))} */}
        <main></main>
      </aside>
    );
  }
  // getEachTopic = event => {
  //   const { target } = event;
  //   console.log(target.value, "TARGET");
  //   return this.setState(currentState => {
  //     return { filterTopicsBy: target.value };
  //   });
  // };
  // componentDidMount() {
  //   const { filterTopicsBy } = this.state;
  //   console.log("mounting");
  //   Api.FetchTopics(filterTopicsBy)
  //     .catch(err => {
  //       this.setState({ err });
  //     })
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ topics: res, isLoading: false });
  //     });
  // }
}
export default TopicTile;
