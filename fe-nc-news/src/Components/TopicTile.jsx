import React, { Component } from "react";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import Articles from "./Articles";
class TopicTile extends Component {
  state = {
    topics: [],
    isLoading: true,
    filterTopicsBy: null
  };
  render() {
    if (this.state.isLoading) return IsLoading();
    console.log(this.props.articles, "TOPICS");
    const { topics } = this.state;
    return (
      <aside className="TopicTile">
        <h1>Topics</h1>
        <main>
          <label htmlFor="sortBy">Select Topic</label>
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
  //   console.log(event.target.value);
  //   return this.setState(currentState => {
  //     return { filterTopicsBy: target.value };
  //   });
  // };

  componentDidMount() {
    console.log("mounting");
    Api.FetchTopics().then(res => {
      this.setState({ topics: res, isLoading: false });
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.state, "state");
  //   const { filterTopicsBy } = this.state;
  //   //console.log(filterTopicsBy !== prevState.filterTopicsBy, "StateUpdate");
  //   if (filterTopicsBy !== prevState.filterTopicsBy)
  //     Api.FetchArticles(filterTopicsBy).then(res => {
  //       console.log(res, "HERE");
  //       return this.setState(currentState => {
  //         return {
  //           articles: res,
  //           filterTopicsBy: filterTopicsBy,
  //           isLoading: false
  //         };
  //       });
  //     });
  // }
}
export default TopicTile;
