import React from "react";
import { getTopics } from "../api.js";
import { Link } from "@reach/router";
import Articles from "./Articles";

class Topics extends React.Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div className="topics-block">
        <ul>
          {this.state.topics &&
            this.state.topics.map(topic => {
              return (
                <li key={topic.slug} className="topic">
                  <Link
                    to={`/articles/topic/${topic.slug}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h2> {topic.slug} </h2>
                  </Link>
                </li>
              );
            })}
        </ul>
        <Articles />
      </div>
    );
  }

  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics: topics });
    });
  }
}

export default Topics;
