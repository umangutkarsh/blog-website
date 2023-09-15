import React from 'react';
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage({ posts }) {
	return (
		<React.Fragment>
			<Head>
				<title>RottenApple' Blogs</title>
				<meta
					name='description'
					content='I talk about programming and software development'
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</React.Fragment>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default HomePage;
