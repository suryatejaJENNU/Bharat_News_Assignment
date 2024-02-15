import React from 'react';
import { Link } from 'react-router-dom';

function Home({ articles }) {
  return (
    <div className="container mb-5 mt-5">
      {/* Heading */}
      <h1 className="my-4 mt-5">Latest Articles</h1>
      {/* Article Cards */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Map through each article and render a card for each */}
        {articles.map(article => (
          <div key={article.id} className="col">
            {/* Article Card */}
            <div className="card h-100">
              {/* Article Image */}
              <img src={article.imageUrl} className="card-img-top" alt={article.title} />
              {/* Card Body */}
              <div className="card-body">
                {/* Article Title */}
                <h5 className="card-title">{article.title}</h5>
                {/* Article Summary */}
                <p className="card-text">{article.summary}</p>
                {/* Published Date */}
                <p className="card-text">
                  <small className="text-muted">Published on {article.publishedDate}</small>
                </p>
                {/* Read More Button */}
                {/* Link to the ArticleDetail component with the article ID */}
                <Link to={`/article/${article.id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
