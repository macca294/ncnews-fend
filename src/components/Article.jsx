import React from "react";
import { getArticle, patchArticle } from "../api.js";
import Comments from "../components/Comments";


class Article extends React.Component {
  state = {
    article: [],
    votes: 0,
    buttonClicked: false
  };

  render() {
    return (
      <div>
        <div className="article">
          <h1>{this.state.article.title}</h1>
          <br />
          <p>by {this.state.article.author}</p>
          <br />
          <p>{this.state.article.body}</p>
          <br/>
          <p>votes: {this.state.votes + this.state.article.votes}</p>
          <div className="rating">
		<button className="vote-button-up rating-up fa fa-thumbs-o-up" aria-hidden="true" onClick={() =>{this.handleVote(1)}} disabled={this.state.votes === 1}></button>
		<button className="vote-button-down rating-down fa fa-thumbs-o-down" aria-hidden="true" onClick={() =>{this.handleVote(-1)}} disabled={this.state.votes === -1}></button>
	</div>
        </div>
        <div className="article-comments">
          <Comments id={this.props.article_id} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    getArticle(this.props.article_id).then(article => {
      this.setState({ article: article });
    });

    }


  handleVote = (direction) => {

    patchArticle(this.props.article_id, {inc_votes: direction })

    this.setState(prevState => {
        const newVote = prevState.votes + direction;  

        return {
            votes: newVote,
            buttonClicked: true
        }  

        })

  }

    
    
        
        
    

}


export default Article;
