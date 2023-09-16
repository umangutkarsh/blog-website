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
		const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.8z0cfea.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

		try {
			client = await MongoClient.connect(connectionString);
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
