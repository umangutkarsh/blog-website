import React from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';
import Head from 'next/head';

function PostDetailsPage({ data }) {
	return (
		<React.Fragment>
			<Head>
				<title>{data.title}</title>
				<meta name='description' content={data.excerpt} />
			</Head>
			<PostContent post={data} />
		</React.Fragment>
	);
}

export function getStaticProps(context) {
	const { params } = context;

	const postData = getPostData(params.slug);

	return {
		props: {
			data: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postFileNames = getPostsFiles();
	const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

	return {
		paths: slugs.map(slug => ({ params: { slug: slug } })),
		fallback: false,
	};
}

export default PostDetailsPage;
