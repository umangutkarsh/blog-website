import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
	{
		slug: 'getting-started-with-nextjs',
		title: 'Getting started with Nextjs',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is a popular framework which is build on top of the React frontend library, and is useful in features such as SSR, client-side data fetching, file-based routing, and it makes building fullstack React applications easy.',
		date: '2023-11-12',
	},
	{
		slug: 'getting-started-with-nextjs2',
		title: 'Getting started with Nextjs',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is a popular framework which is build on top of the React frontend library, and is useful in features such as SSR, client-side data fetching, file-based routing, and it makes building fullstack React applications easy.',
		date: '2023-11-12',
	},
	{
		slug: 'getting-started-with-nextjs3',
		title: 'Getting started with Nextjs',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is a popular framework which is build on top of the React frontend library, and is useful in features such as SSR, client-side data fetching, file-based routing, and it makes building fullstack React applications easy.',
		date: '2023-11-12',
	},
	{
		slug: 'getting-started-with-nextjs4',
		title: 'Getting started with Nextjs',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is a popular framework which is build on top of the React frontend library, and is useful in features such as SSR, client-side data fetching, file-based routing, and it makes building fullstack React applications easy.',
		date: '2023-11-12',
	},
];

function AllPostsPage() {
	return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
