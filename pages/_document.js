import Document, { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head lang='en' />
				<body>
					<Main />
					<NextScript />
					<div id='notifications'></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;