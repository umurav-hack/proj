import mongoose, { Schema, Document } from 'mongoose';

const JobSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  salary: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Job', JobSchema);