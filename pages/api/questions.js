import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  const { method } = req;
  const { db } = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const questions = await db.collection('questions').find().sort({ createdAt: -1 }).toArray();
        res.status(200).json(questions);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching questions' });
      }
      break;
    case 'POST':
      try {
        const { name, email, question } = req.body;
        const newQuestion = { name, email, question, createdAt: new Date(), replies: [] };
        await db.collection('questions').insertOne(newQuestion);
        res.status(201).json({ message: 'Question added successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error adding question' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}