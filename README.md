
### Newspaper Web Application

### hoisted link : https://suryatejabharatnewspaperassignment.netlify.app/

### Objective
The objective of the Newspaper Web Application is to create a platform where users can read and stay updated with the latest news articles. The application will provide functionalities such as browsing articles, reading detailed content, and adding new articles.

### Tech Stack
	Frontend: ReactJS, React Router
	State Management: Redux or React Context API
	Styling: CSS or CSS frameworks (e.g., Bootstrap)
	Data Management: UUID for generating unique identifiers
### Completion Instructions
### Functionality
###	Must Have
	Implement a ReactJS application with multiple pages/components, including Home, Article Listing, Article Detail, and Add Article Form.
	Display a list of articles on the home page.
	Allow users to click on an article to view its details.
	Provide a form for users to add new articles.
	Include navigation with links for Home, Article List, and Add New Article.
### Technical Details
###  	Routes and Paths of Newspaper Application:
	Page		        Component	    Route		    Path
	Home		            Home		/		        /
	Article List	    ArticleList	    /articles	    /articles
	Article Detail	    ArticleDetail	/article/:id	/article/:id
	Add Article	        AddArticleForm	/add-article	/add-article
	
###	Home Page
	Component: Home
	Details:
	Header with links for Home, Article List, and Add New Article.
	Component: ArticleList
	Details:
	Header with links for Home, Article List, and Add New Article.
	List of articles with title, summary, author, published date, and thumbnail image.
	Pagination for navigating through multiple pages of articles.
###	Article Detail Page
	Component: ArticleDetail
	Details:
	Header with links for Home, Article List, and Add New Article.
	Detailed information about the article including title, content, author, and published date.
	"Back" button to navigate back to the Article List.
	Add Article Page
###	Component: AddArticleForm
	Details:
	Header with links for Home, Article List, and Add New Article.
	Form for users to input details of the new article including title, content, author, and published date.
	"Submit" button to add the new article to the list.
### Resources
	APIs :https://newsapi.org/v2/everything?q=tesla&from=2024-01-14&sortBy=publishedAt&apiKey=API_KEY  dummy data is Taken from this Api
###	Third-party Packages
	React Router DOM
	Bootstrap
	uuid
	PropTypes