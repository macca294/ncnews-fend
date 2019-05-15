import React from "react";
import { getTopics } from "../api.js";
import { Link } from "@reach/router";
import Articles from './Articles'

class Topics extends React.Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div>
        <ul className="topics-block">
          {this.state.topics &&
            this.state.topics.map(topic => {
              return (
                <li key={topic.slug} className="topic">
                  <Link to={`/articles/topic/${topic.slug}`} style={ {textDecoration: "none", color: "black" }}>
                    <h3>{topic.slug}</h3>
                  </Link>
                <br/>
                </li>
              );
            })}
        </ul>
        <br/>
        <Articles/>
      </div>
    );
  }

  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics: topics });

      console.log(topics);
    });
  }
}

export default Topics;
