# Blog-Website

# Blog Website using MERN Stack with Next.js
This is a blog website built using the MERN (MongoDB, Express, React, Node) stack, with Next.js as the framework for the React client. The project also utilizes React DOM and various external packages to enhance functionality. Nodemon is used for server development, and Postman is employed for testing API endpoints.


![5](https://github.com/umangutkarsh/blog-website/assets/95426993/2ea84ff6-1902-4a4f-a2b8-6e61aff471ab)


<br />

## Contents
1. [Features]
2. [Advantages of Using Next.js]
3. [Getting Started]
4. [API Endpoints]
5. [Testing with Postman]

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

## API Endpoints
GET /api/blogs: Fetch all blog posts.
GET /api/blogs/:id: Fetch a single blog post by ID.
POST /api/contact: Submit a contact form.

<br />

## Testing with Postman
To test the API endpoints using Postman:

Open Postman.
Import the provided collection file for testing.
Execute the requests to test the endpoints.
