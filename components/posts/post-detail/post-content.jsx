import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';

import classes from './post-content.module.css';

const DUMMY_POST = {
	slug: 'getting-started-with-nextjs',
	title: 'Getting started with Nextjs',
	image: 'getting-started-nextjs.png',
	date: '2023-11-12',
	content: '# This is a dummy post',
};

function PostContent() {
	return (
		<article className={classes.content}>
			<PostHeader
				title={DUMMY_POST.title}
				image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}
			/>
			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
