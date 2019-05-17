import React, { Component } from "react";
import { postNewComment } from "../api.js";

export default class PostComment extends Component {
  state = {
    userInput: ""
  };

  render(props) {
    return (
      <div className="post-comment">
        <p>post a comment </p>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            id="commentInput"
            type="text"
            value={this.state.userInput}
            onChange={this.handleInput}
          />
          <button disabled={!this.state.userInput}>submit</button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ userInput: "" });
  }
  componentDidUpdate() {}

  handleInput = e => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ userInput: "" });

    const post = {
      username: this.props.username,
      body: this.state.userInput
    };

    postNewComment(this.props.id, post).then(comment => {
      this.props.addComment(comment);
    });
  };
}
