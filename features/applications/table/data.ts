export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type LanguageLevel = "Basic" | "Conversational" | "Fluent" | "Native";

export type AvailabilityStatus =
  | "Available"
  | "Open to Opportunities"
  | "Not Available";

export type WorkType = "Full-time" | "Part-time" | "Contract";

export interface TApplicant {
  // Extra (for your system)
  appliedAt: string;

  // Availability
  availability: {
    status: AvailabilityStatus;
    type: WorkType;
    startDate?: string;
  };
  bio?: string;

  // Certifications
  certifications?: {
    name: string;
    issuer: string;
    issueDate: string; // YYYY-MM
  }[];

  // Education
  education: {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startYear: number;
    endYear: number;
  }[];
  email: string;

  // Experience
  experience: {
    company: string;
    role: string;
    startDate: string; // YYYY-MM
    endDate: string | "Present";
    description: string;
    technologies: string[];
    isCurrent: boolean;
  }[];

  // Basic Info
  firstName: string;
  headline: string;
  id: string;
  jobId: string; // link to Job

  languages?: {
    name: string;
    proficiency: LanguageLevel;
  }[];
  lastName: string;
  location: string;

  // Projects
  projects: {
    name: string;
    description: string;
    technologies: string[];
    role: string;
    link?: string;
    startDate: string;
    endDate: string;
  }[];

  // Skills
  skills: {
    name: string;
    level: SkillLevel;
    yearsOfExperience: number;
  }[];

  // Social
  socialLinks?: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  status: "pending" | "shortlisted" | "rejected";
}

export const applicants: TApplicant[] = [
  {
    id: "app_001",
    jobId: "job_001",
    firstName: "Eric",
    lastName: "Ndayisenga",
    email: "eric@example.com",
    headline: "Frontend Developer – React & Next.js",
    location: "Kigali, Rwanda",

    skills: [
      { name: "React", level: "Advanced", yearsOfExperience: 3 },
      { name: "Next.js", level: "Intermediate", yearsOfExperience: 2 },
    ],

    languages: [
      { name: "English", proficiency: "Fluent" },
      { name: "Kinyarwanda", proficiency: "Native" },
    ],

    experience: [
      {
        company: "TechNova Ltd",
        role: "Frontend Developer",
        startDate: "2023-01",
        endDate: "Present",
        description: "Built dashboards and UI systems",
        technologies: ["React", "TypeScript"],
        isCurrent: true,
      },
    ],

    education: [
      {
        institution: "University of Rwanda",
        degree: "Bachelor's",
        fieldOfStudy: "Computer Science",
        startYear: 2020,
        endYear: 2024,
      },
    ],

    projects: [
      {
        name: "Job Portal",
        description: "Online job hiring platform",
        technologies: ["Next.js", "Prisma"],
        role: "Frontend Developer",
        link: "https://example.com",
        startDate: "2025-01",
        endDate: "2025-03",
      },
    ],

    availability: {
      status: "Available",
      type: "Full-time",
    },

    socialLinks: {
      github: "https://github.com/eric",
    },

    appliedAt: "2026-04-06",
    status: "pending",
  },
];
