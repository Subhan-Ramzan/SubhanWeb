// pages/api/getSupporters.js
import connectDB from '@/utils/connectDB';
import Supporter from '@/models/Supporter';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectDB(); // Ensure MongoDB connection is established
      const supporters = await Supporter.find({});
      res.status(200).json({ supporters });
    } catch (error) {
      console.error('Error fetching supporters:', error);
      res.status(500).json({ message: 'Error fetching supporters' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
