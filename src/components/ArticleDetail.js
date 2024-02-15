import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook to access URL parameters
import { Link } from 'react-router-dom'; // Import Link component for navigation

function ArticleDetail({ articles }) {
  const { id } = useParams(); // Extract the article ID from URL parameters
  const article = articles.find(article => article.id === id); // Find the article with the matching ID

  // Check if the article exists before accessing its properties
  if (!article) {
    return <div className="container">Article not found</div>; // If article not found, display a message
  }

  return (
    <div className="container mb-5 mt-5">
      {/* Article Card */}
      <div className="card mb-3">
        {/* Article Image */}
        <img src={article.imageUrl} className="card-img-top" alt={article.title} />
        {/* Card Body */}
        <div className="card-body">
          {/* Article Title */}
          <h2 className="card-title">{article.title}</h2>
          {/* Author */}
          <p className="card-text"><strong>Author:</strong> {article.author}</p>
          {/* Published Date */}
          <p className="card-text"><strong>Published Date:</strong> {article.publishedDate}</p>
          {/* Article Content */}
          <p className="card-text">{article.content}</p>
          {/* Back Button */}
          <Link to="/" className="btn btn-primary mb-3">Back</Link> {/* Link to go back to the home page */}
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
