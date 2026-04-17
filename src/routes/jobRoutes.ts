import express from 'express';
import Job from '../models/job.ts'; // Note the .js extension!

const router = express.Router();

// Route to create a job
router.post('/create', async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ message: "Error saving job" });
  }
});

// Route to get all jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

export default router;