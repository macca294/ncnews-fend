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
    console.log(this.state.comments);
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
          <p>Login to post a comment</p>
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
                  {this.props.loggedInUser && (
                    <div className="rating">
                      <Voter votes={comment.votes} id={comment.comment_id} />
                    </div>
                  )}
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
    console.log(id);
    removeComment(id).then(() => {
      const filteredComments = this.state.comments.filter(comment => {
        return comment.comment_id !== id;
      });
      this.setState({ comments: filteredComments });
    });
  };
  addComment = comment => {
    console.log(comment);
    this.setState(prevState => {
      const newComments = prevState.comments.map(comment => {
        return { ...comment };
      });

      return { comments: [comment, ...newComments] };
    });
  };
}

export default Comments;
