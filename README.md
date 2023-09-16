# Blog-Website

## Blog Website using MERN Stack with Next.js
This is a blog website built using the MERN (MongoDB, Express, React, Node) stack, with Next.js as the framework for the React client. The project also utilizes React DOM and various external packages to enhance functionality. Nodemon is used for server development, and Postman is employed for testing API endpoints.

[![Mongo Badge](http://img.shields.io/badge/Database%20-MongoDB-darkgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
&emsp;
[![Express Badge](http://img.shields.io/badge/Server%20-Express-black?style=for-the-badge&logo=express)](https://expressjs.com/)
&emsp;
[![Reactjs Badge](http://img.shields.io/badge/Client%20-React-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
&emsp;
[![Node Badge](http://img.shields.io/badge/Backend%20-Node-green?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)
&emsp;


![5](https://github.com/umangutkarsh/blog-website/assets/95426993/2ea84ff6-1902-4a4f-a2b8-6e61aff471ab)
<br/>

[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)



<br />

## Contents
1. [Features](https://github.com/umangutkarsh/blog-website/tree/main#features)
2. [Advantages of Using Next.js](https://github.com/umangutkarsh/blog-website/tree/main#advantages-of-using-nextjs)
3. [Getting Started](https://github.com/umangutkarsh/blog-website/tree/main#getting-started)
4. [Create next.config.js file](https://github.com/umangutkarsh/blog-website/tree/main#create-nextconfigjs-file)
5. [API Endpoints](https://github.com/umangutkarsh/blog-website/tree/main#getting-started)
6. [Testing with Postman](https://github.com/umangutkarsh/blog-website/tree/main#testing-with-postman)

<br />

## Features
**1. View Single Blogs**
Users can read individual blog posts with rich text content and images. The website offers a seamless and engaging reading experience.

**2. Show Featured Blogs**
Featured blogs are highlighted on the website, making it easy for users to discover and explore the most compelling content.

**3. Contact Functionality**
Users can get in touch with the website administrators or bloggers via a built-in contact form. This feature enhances user interaction and engagement.

<br />

## Advantages of Using Next.js
Next.js provides several advantages for building a web application like this blog website:

**Server-Side Rendering (SSR):** Next.js offers SSR out of the box, enhancing SEO and improving page load times.

**Efficient Routing:** Routing in Next.js is simple and intuitive, making it easy to navigate between pages.

**Automatic Code Splitting:** The framework automatically splits code into small, optimized bundles, resulting in faster page loads.

**Static Site Generation (SSG):** Next.js supports SSG, which is ideal for blogs as it pre-renders pages at build time, reducing server load and improving performance.

**Built-in CSS Support:** Next.js provides built-in support for CSS modules and styled-components, simplifying styling.

**Large Ecosystem:** Next.js has a vast ecosystem of plugins and packages, allowing developers to extend functionality easily.


<br />


## Getting Started
To run the project locally, follow these steps:

Clone this repository.
Navigate to the project directory.
Install dependencies using npm install.
Start the development server with npm run dev.
Open your web browser and access the website at http://localhost:3000.

<br />

## Create next.config.js file
```
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: your_username,
				mongodb_password: your_password,
				mongodb_clustername: your_clustername,
				mongodb_database: your_dbName,
			},
		};
	}

	return {
		env: {
			mongodb_username: your_username-prod,
			mongodb_password: your_password-prod,
			mongodb_clustername: your_clustername-prod,
			mongodb_database:  your_dbName-prod,
		},
	};
};

```


<br />


## API Endpoints
* GET `/api/posts`: Fetch all blog posts.
* GET `/api/posts/:id`: Fetch a single blog post by ID.
* POST `/api/contact`: Submit a contact form.

<br />

## Testing with Postman
To test the API endpoints using Postman:

Open Postman.
Import the provided collection file for testing.
Execute the requests to test the endpoints.
