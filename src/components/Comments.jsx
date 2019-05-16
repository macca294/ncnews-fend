import React from "react";
import { getComments, removeComment } from "../api.js";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Voter from './Voter'


class Comments extends React.Component {
  state = {
    comments: []
  };

  render(props) {
    return (
      <div>
        <h2>Comments</h2>
        <button className="post-comment"> post a comment </button>
        <ul className="comments-block">
          {this.state.comments &&
            this.state.comments.map(comment => {
              return (
                <li key={comment.comment_id} className="comment">
                  {this.props.loggedInUser === comment.author && <button id='comment.comment_id'className="delete-button" onClick={() =>{this.handleDelete(comment.comment_id)}}> remove </button>}
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


  handleDelete = (id) => {
    console.log(id)
    removeComment(id)
      .then(() => {
  
     const filteredComments =  this.state.comments.filter(comment => {
      return comment.comment_id !== id 
      }) 
      this.setState({comments: filteredComments})
      
      })
}
}

export default Comments;



   

