import express from 'express';
import multer from 'multer';
import fs from 'fs';
// @ts-ignore
import pdf from 'pdf-parse-fork';
import Applicant from '../models/applicant.ts'; 
import Job from '../models/job.ts'; 
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const upload = multer({ dest: 'uploads/' });

router.get("/", async (req, res) => {
  try {
    const applicants = await Applicant.find().populate('jobId');
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applicants" });
  }
});

router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, jobId } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ message: "Please upload a resume file." });

    const job = await Job.findById(jobId);
    if (!job) {
      if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
      return res.status(404).json({ message: "Job not found" });
    }

    // 1. Extract text from the PDF
    const dataBuffer = fs.readFileSync(file.path);
    
    // Using the modern pdf-parse-fork (no more "not a function" error)
    const pdfData = await pdf(dataBuffer);
    const resumeText = pdfData.text;

    // 2. Ask Gemini to rank the applicant
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });  
    const prompt = `
      Compare this Resume to this Job Description. 
      Job: ${job.description}
      Resume: ${resumeText}
      Return ONLY a JSON object like this: {"score": 85, "reasoning": "Explain why in 3 sentences"}
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const cleanedJson = responseText.replace(/```json|```/g, "").trim();
    
    let aiData = JSON.parse(cleanedJson);

    // 3. Save Applicant to DB
    const applicant = new Applicant({
      name,
      email,
      resumeText, 
      jobId,
      score: aiData.score,
      reasoning: aiData.reasoning
    });

    await applicant.save();

    // 4. Cleanup
    if (fs.existsSync(file.path)) fs.unlinkSync(file.path);

    res.json({ message: "Application processed successfully", applicant });

  } catch (error: any) {
    if (req.file && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    
    console.error("Route Error:", error);
    res.status(500).json({ message: "Error processing application" });
  }
});

export default router;