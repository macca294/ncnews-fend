import React from "react";
import { getArticles } from "../api.js";
import { Link } from "@reach/router";

class Articles extends React.Component {
  state = {
    articleList: []
  };

  render() {
    return (
      <div>
        <h2>Articles</h2>
        <ul className="article-block">
          {this.state.articleList &&
            this.state.articleList.map(article => {
              return (
                <Link
                  to={`/articles/${article.article_id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li key={article.article_id} className="articles">
                    <h1>{article.title}</h1>
                    <p>
                      by <strong>{article.author}</strong>
                    </p>
                    <p>
                      from <strong>{article.topic}</strong>
                    </p>
                    <br />
                    <p className="article-prev-text">
                      {article.body.slice(0, 200)}...
                    </p>
                    <br />
                    <p>comments: {article.comment_count}</p>
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
      const query = { topic: this.props.topic }
    getArticles(query).then(articles => {
      this.setState({ articleList: articles });
    });
  }
}

export default Articles;
