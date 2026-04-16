# UMURAVA AI Backend - Recruitment Scoring Engine

This is the backend service for the Scout AI platform. It handles job management and uses the **Google Gemini AI** to automatically screen and score candidate resumes against specific job descriptions.

# 👥 Contributors
# Rosine umurava AI – Lead Backend Developer
##  Role: AI Integration (Gemini), Database Architecture (MongoDB), and API Development.
##  Email: gajurosine1@gmail.com
##  GitHub: github.com/gajurosine

## 🚀 Key Features

* **AI Resume Scoring:** Integrates with `gemini-1.5-flash` to analyze resume text and provide a numerical score and qualitative reasoning.
* **Job Management:** RESTful API to create and retrieve job postings.
* **Applicant Tracking:** Stores applicant data, resumes, and AI-generated feedback in MongoDB.
* **Resilient Error Handling:** Implements "Safe JSON" parsing for AI responses and handles API Rate Limiting (429 errors) gracefully.

## 🛠️ Tech Stack

* **Runtime:** Node.js with TypeScript
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose)
* **AI Integration:** Google Generative AI SDK (Gemini API)
* **Tools:** PowerShell for testing, Git for version control

## 📁 Project Structure

```text
scout-backend/
├── src/
│   ├── models/          # Mongoose Schemas (Job, Applicant)
│   ├── routes/          # API Endpoints (Job routes, Applicant logic)
│   └── index.ts         # Server entry point & DB connection
├── .env                 # Environment variables (API Keys)
└── package.json         # Project dependencies

