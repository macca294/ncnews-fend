import React from "react";
import { getArticle } from "../api.js";
import Comments from "../components/Comments";
import Voter from './Voter';

class Article extends React.Component {
  state = {
    article: [],
  };

  render(props) {
    const {article} = this.state
    return (
        
      <div>
        <div className="article">
          <h1>{article.title}</h1>
          <br />
          <p>by {article.author}</p>
          <br />
          <p>{article.body}</p>
        <Voter votes = {article.votes} id={article.article_id} type={'article'}/>
        </div>
        <div className="article-comments">
          <Comments id={this.props.article_id} loggedInUser={this.props.loggedInUser} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    getArticle(this.props.article_id).then(article => {
      this.setState({ article: article });
    });

    }  
    

}


export default Article;
