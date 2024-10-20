import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  const { method } = req;
  const { db } = await connectToDatabase();

  if (method === 'POST') {
    try {
      const { questionId, name, email, reply } = req.body;
      const newReply = { name, email, reply, createdAt: new Date() };
      await db.collection('questions').updateOne(
        { _id: ObjectId(questionId) },
        { $push: { replies: newReply } }
      );
      res.status(201).json({ message: 'Reply added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error adding reply' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}