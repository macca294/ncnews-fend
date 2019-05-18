import React, { Component } from "react";
import { postNewComment } from "../api.js";

export default class PostComment extends Component {
  state = {
    userInput: ""
  };

  render(props) {
    return (
      <div className="post-comment">
        <h4>post a comment </h4>
        <form action="" onSubmit={this.handleSubmit}>
          
          <textarea  id="commentInput"
            type="text"
            value={this.state.userInput}
            onChange={this.handleInput} name="Text1" cols="40" rows="5"></textarea>
          
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
