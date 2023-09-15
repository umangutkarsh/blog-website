import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import Image from 'next/image';

import classes from './post-content.module.css';

function PostContent({ post }) {
	const customRenderer = {
		// image(image) {
		// 	return (
		// 		<Image
		// 			src={`/images/posts/${post.slug}/${image.src}`}
		// 			alt={image.alt}
		// 			width={300}
		// 			height={150}
		// 		/>
		// 	);
		// },
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];

				return (
					<div className={classes.image}>
						<Image
							src={`/images/posts/${post.slug}/${image.properties.src}`}
							alt={image.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader
				title={post.title}
				image={`/images/posts/${post.slug}/${post.image}`}
			/>
			<ReactMarkdown components={customRenderer}>{post.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
