import React from "react";
import { getComments, removeComment } from "../api.js";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Voter from "./Voter";
import PostComment from "./PostComment";

class Comments extends React.Component {
  state = {
    comments: []
  };

  render(props) {
    return (
      <div>
        <h2>Comments</h2>
        {this.props.loggedInUser ? (
          <PostComment
            username={this.props.loggedInUser}
            id={this.props.id}
            addComment={this.addComment}
          />
        ) : (
          <h5>login to vote and post a comment</h5>
        )}
        <ul className="comments-block">
          {this.state.comments &&
            this.state.comments.map(comment => {
              return (
                <li key={comment.comment_id} className="comment">
                  {this.props.loggedInUser === comment.author && (
                    <button
                      id="comment.comment_id"
                      className="delete-button"
                      onClick={() => {
                        this.handleDelete(comment.comment_id);
                      }}
                    >
                      remove
                    </button>
                  )}
                  <h1>{comment.title}</h1>
                  <p>
                    <strong>{comment.author}</strong> says...
                  </p>
                  <br />
                  <p>{comment.body}</p>
                  <div className="rating">
                    <Voter
                      votes={comment.votes}
                      id={comment.comment_id}
                      loggedInUser={this.props.loggedInUser}
                    />
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

  handleDelete = id => {
    removeComment(id).then(() => {
      const filteredComments = this.state.comments.filter(comment => {
        return comment.comment_id !== id;
      });
      this.setState({ comments: filteredComments });
    });
  };
  addComment = comment => {
    this.setState(prevState => {
      const newComments = prevState.comments.map(comment => {
        return { ...comment };
      });

      return { comments: [comment, ...newComments] };
    });
  };
}

export default Comments;
