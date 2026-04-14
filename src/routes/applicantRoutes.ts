import express from 'express';
import Applicant from '../models/applicant.ts'; 
import Job from '../models/job.ts'; 
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

router.post('/apply', async (req, res) => {
  try {
    const { name, email, resumeText, jobId } = req.body;

    // 1. Find the Job Description from the DB
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // 2. Ask Gemini to rank the applicant
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `
      Compare this Resume to this Job Description. 
      Job: ${job.description}
      Resume: ${resumeText}
      Return ONLY a JSON object like this: {"score": 85, "reasoning": "Explain why in one sentence"}
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // --- ADDED: Clean the response from Gemini ---
    // This removes any ```json or ``` marks that cause JSON.parse to fail
    const cleanedJson = responseText.replace(/```json|```/g, "").trim();
    
    let aiData;
    try {
      aiData = JSON.parse(cleanedJson);
    } catch (parseError) {
      console.error("AI sent back invalid JSON format:", responseText);
      return res.status(500).json({ message: "AI response format error" });
    }

    // 3. Save Applicant with the AI score
    const applicant = new Applicant({
      name,
      email,
      resumeText,
      jobId,
      score: aiData.score,
      reasoning: aiData.reasoning
    });

    await applicant.save();
    res.json({ message: "Application processed", applicant });

  } catch (error: any) {
    // --- ADDED: Better logging for Quota Errors ---
    if (error.status === 429) {
      console.error("❌ GEMINI QUOTA EXCEEDED: Wait 60 seconds before trying again.");
      return res.status(429).json({ message: "AI is busy. Please wait a minute." });
    }
    
    console.error("Error details:", error);
    res.status(500).json({ message: "Error processing application" });
  }
});

export default router;