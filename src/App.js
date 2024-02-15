import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ArticleDetail from './components/ArticleDetail';
import AddArticleForm from './components/AddArticleForm';
import { articles as dummyArticles } from './data/articles';

import { v4 as uuidv4 } from 'uuid';

function App() {
  // State to manage articles
  const [articles, setArticles] = useState(dummyArticles);

  // Function to add a new article
  const handleAddArticle = newArticle => {
    // Generate a unique ID for the new article
    newArticle.id = uuidv4();
    // Update the articles state by adding the new article to the existing list
    setArticles(prevArticles => [...prevArticles, newArticle]);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* Add fixed-top class to keep the navbar fixed at the top */}
          <div className="container">
            <Link className="navbar-brand" to="/">Newspaper Web App</Link>
            {/* Navbar toggle button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-article">Add New Article</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Container for the main content */}
        <div className="container mt-5"> {/* Add margin top */}
          {/* Define routes for different pages */}
          <Routes>
            <Route exact path="/" element={<Home articles={articles} />} />
            <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
            <Route path="/add-article" element={<AddArticleForm onAddArticle={handleAddArticle} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
