import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.ts'; // Change .js to .ts
import jobRoutes from './routes/jobRoutes.ts';
import { testGemini } from './services/aiService.ts';
import applicantRoutes from './routes/applicantRoutes.ts';

// Connect to Database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Tell the app to use the job routes
app.use('/api/jobs', jobRoutes);

app.use('/api/applicants', applicantRoutes);



// AI Test Route to test Gemini API integration 
// app.get('/test-ai', async (req, res) => {
//   try {
//     const message = await testGemini();
//     res.json({ success: true, message });
//   } catch (error) {
//     res.status(500).json({ 
//       success: false, 
//       error: error instanceof Error ? error.message : "Unknown error" 
//     });
//   }
// });



// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Scout AI Backend is Running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running  on port ${PORT}`);
});