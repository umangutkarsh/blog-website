import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailsPage({ data }) {
	return <PostContent post={data} />;
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
