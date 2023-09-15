import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
		code(code) {
			const { className, children } = code;
			const language = className.split('-')[1];
			return (
				<SyntaxHighlighter
					style={materialOceanic}
					language={language}
					children={children}
				/>
			);
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
