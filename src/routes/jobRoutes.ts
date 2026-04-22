import express from 'express';
import Job from '../models/job.ts';

const router = express.Router();

/**
 * @route   GET /api/jobs
 * @desc    Get all jobs (YOU CAN VISIT THIS IN BROWSER)
 */
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
});

/**
 * @route   POST /api/jobs/create
 * @desc    Create a job (USE POSTMAN OR POWERSHELL TO TEST)
 */
router.post('/create', async (req, res) => {
  try {
    const { title, description, location } = req.body;

    // Check if required fields are missing
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const newJob = new Job({ title, description, location });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ message: "Error saving job" });
  }
});

export default router;