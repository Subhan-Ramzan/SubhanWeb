
//models/Supporter.js
import mongoose from 'mongoose';

const SupporterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

const Supporter = mongoose.models.Supporter || mongoose.model('Supporter', SupporterSchema);

export default Supporter;
