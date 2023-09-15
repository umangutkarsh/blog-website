import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			return res.status(422).json({ message: 'Please enter valid inputs' });
		}

		const newMessage = {
			email,
			name,
			message,
		};

		let client;
		try {
			client = await MongoClient.connect(
				'mongodb+srv://umangutkarsh_:32mvsNzFuokQ@next-blogs.8z0cfea.mongodb.net/messages?retryWrites=true&w=majority'
			);
		} catch (error) {
			return res
				.status(500)
				.json({ message: 'Could not connect to the database' });
		}

		const db = client.db();

		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			return res.status(500).json({ message: 'Could not store message' });
		}

		client.close();

		console.log(newMessage);
		res
			.status(201)
			.json({ message: 'Message sent successfully', message: newMessage });
	}
}

export default handler;
