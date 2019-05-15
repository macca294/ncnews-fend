import React from "react";
import { getComments } from "../api.js";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Voter from './Voter'

class Comments extends React.Component {
  state = {
    comments: []
  };

  render() {
    return (
      <div>
        <h2>Comments</h2>
        <button className="post-comment"> post a comment </button>
        <ul className="comments-block">
          {this.state.comments &&
            this.state.comments.map(comment => {
              return (
                <li key={comment.comment_id} className="comment">
                  <button className="delete-button"> remove </button>
                  <h1>{comment.title}</h1>
                  <p>
                    <strong>{comment.author}</strong> says...
                  </p>
                  <br />
                  <p>{comment.body}...</p>
                  <div className="rating">
                    <Voter votes={comment.votes} id={comment.comment_id} />
                     </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    getComments(this.props.id).then(comments => {
      this.setState({ comments: comments });
    });
  }

}

export default Comments;
