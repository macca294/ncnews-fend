import React from "react";
import { patchComment, patchArticle } from "../api";

class Voter extends React.Component {
  state = {
    vote: 0
  };
  render() {
    return (
      <div>
          <p>votes {this.state.vote + this.props.votes}</p>
        <button
          className="vote-button-up rating-up fa fa-thumbs-o-up"
          aria-hidden="true"
          onClick={() => {
            this.handleVote(this.props.id, 1);
          }}
          disabled={this.state.vote === 1}
        />
        <button
          className="vote-button-down rating-down fa fa-thumbs-o-down"
          aria-hidden="true"
          onClick={() => {
            this.handleVote(this.props.id, -1);
          }}
          disabled={this.state.vote === -1}
        />
      </div>
    );
  }
handleVote = (id, direction) => {
if (this.props.type === 'article'){
    patchArticle(id, {inc_votes: direction })
}
else {
   patchComment(id, {inc_votes: direction})
}

this.setState({vote: this.state.vote + direction})
}

}

export default Voter;
