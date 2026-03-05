import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  content: { type: String },
  author: { type: String, default: 'Vaishnavi Chella' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
