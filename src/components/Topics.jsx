import React from "react";
import { getTopics } from "../api.js";
import { Link } from "@reach/router";

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
                  <Link to={`/`} style={ {textDecoration: "none", color: "black" }}>
                    <h1>{topic.slug}</h1>
                  </Link>
                  <p> {topic.description}</p>
                </li>
              );
            })}
        </ul>
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
