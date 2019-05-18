import React from "react";
import { getArticles, sortBy } from "../api.js";
import { Link } from "@reach/router";

class Articles extends React.Component {
  state = {
    articleList: []
  };

  render() {
   
    return (
        
      <div>
        {/* <h2>Latest Articles</h2> */}
        
        <div className="sort-div">
          <p>sort articles by:</p>
          <button onClick={() => this.handleSort("?sort_by=created_at")}>
            date
          </button>
          <button onClick={() => this.handleSort("?sort_by=comment_count")}>
            comment count
          </button>
          <button onClick={() => this.handleSort("?sort_by=votes")}>
            votes
          </button>
        </div>
        <ul className="article-block" key="articles">
          {this.state.articleList &&
            this.state.articleList.map(article => {
              return (
                <Link
                  key={article.article_id}
                  to={`/articles/${article.article_id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li className="articles">
                    <h1>{article.title}</h1>
                    <p>
                      by <strong>{article.author}</strong>
                    </p>
                    <p>
                      from <strong>{article.topic}</strong>
                    </p>
                    <br />
                    <p className="article-prev-text">
                      {article.body.slice(0, 150)}...
                    </p>
                    <p>comments: {article.comment_count}</p>
                    <p>votes: {article.votes}</p>
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const query = { topic: this.props.topic };
    getArticles(query).then(articles => {
      this.setState({ articleList: articles });
    });
  }

  handleSort(query) {
    sortBy(query).then(articles => {
      this.setState({ articleList: articles });
    });
  }
}

export default Articles;
