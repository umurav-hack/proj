import mongoose, { Schema } from 'mongoose';

const ApplicantSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  resumeText: { type: String, required: true },
  jobId: { type: Schema.Types.ObjectId, ref: 'Job' }, // Connects to a specific Job
  score: { type: Number, default: 0 }, // Gemini will fill this later
  reasoning: { type: String } // Gemini will fill this later
});

export default mongoose.model('Applicant', ApplicantSchema);