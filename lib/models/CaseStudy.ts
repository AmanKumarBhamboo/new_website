import mongoose from 'mongoose';

const CaseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  tag: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String },
  imageEmoji: { type: String },
  sector: { type: String },
  comingSoon: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.CaseStudy || mongoose.model('CaseStudy', CaseStudySchema);
