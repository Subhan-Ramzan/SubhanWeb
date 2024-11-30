import mongoose, { Schema } from "mongoose";

const NextAuthSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  provider: { type: String, required: true }, // To track Google or GitHub
});

const NextAuth = mongoose.models.NextAuth || mongoose.model('NextAuth', NextAuthSchema);

export default NextAuth;
