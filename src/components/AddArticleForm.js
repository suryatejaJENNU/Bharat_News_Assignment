import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for programmatic navigation

function AddArticleForm({ onAddArticle }) {
    const navigate = useNavigate(); // Initialize navigate function from useNavigate hook
    const [formData, setFormData] = useState({ // Initialize state for form data
        title: '',
        summary: '',
        content: '',
        author: '',
        publishedDate: '',
        imageUrl: ''
    });

    // Function to handle input change in form fields
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault(); // Prevent default form submission behavior
        onAddArticle(formData); // Call the onAddArticle function passed as a prop with the form data
        setFormData({ // Reset form data after submission
            title: '',
            summary: '',
            content: '',
            author: '',
            publishedDate: '',
            imageUrl: ''
        });
        navigate('/'); // Navigate to the home page after form submission
    };

    // Render the form
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <form onSubmit={handleSubmit}>
                        {/* Input fields for article details */}
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title:</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control" id="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="summary" className="form-label">Summary:</label>
                            <input type="text" name="summary" value={formData.summary} onChange={handleChange} className="form-control" id="summary" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Content:</label>
                            <textarea name="content" value={formData.content} onChange={handleChange} className="form-control" id="content" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author:</label>
                            <input type="text" name="author" value={formData.author} onChange={handleChange} className="form-control" id="author" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="publishedDate" className="form-label">Published Date:</label>
                            <input type="date" name="publishedDate" value={formData.publishedDate} onChange={handleChange} className="form-control" id="publishedDate" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imageUrl" className="form-label">Image URL:</label>
                            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="form-control" id="imageUrl" />
                        </div>
                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

// PropTypes for prop validation
AddArticleForm.propTypes = {
    onAddArticle: PropTypes.func.isRequired // onAddArticle function is required as a prop
};

export default AddArticleForm;
