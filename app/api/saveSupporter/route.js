// app/api/saveSupport/pag.js
import connectDB from '@/utils/connectDB'; // Adjust path as per your project structure
import Supporter from '@/models/Supporter'; // Adjust path as per your project structure

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, message, amount } = req.body;

    try {
      await connectDB(); // Ensure MongoDB connection is established
      const supporter = new Supporter({ name, message, amount });
      await supporter.save();
      res.status(200).json({ message: 'Supporter saved successfully' });
    } catch (error) {
      console.error('Error saving supporter:', error);
      res.status(500).json({ message: 'Error saving supporter' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
