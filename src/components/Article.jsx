import React from "react";
import { getArticle } from "../api.js";

class Article extends React.Component {
  state = {
    article: []
  };

  render() {
    return (
      <div className="article">
        <h1>{this.state.article.title}</h1>
        <br />
        <p>by {this.state.article.author}</p>
        <br />
        <p>{this.state.article.body}</p>
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
