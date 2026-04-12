export type JobType = "online" | "onsite";

export type JobStatus = "open" | "closed" | "paused";

export interface TJob {
  applicants: number;
  company: string;
  endHiringAt: string; // ISO date
  experienceLevel: "Junior" | "Mid" | "Senior";
  id: string;
  location: string;
  postedAt: string; // ISO date
  salaryRange: string;
  startHiringAt: string; // ISO date
  status: JobStatus; // open | closed | paused
  title: string;
  type: JobType; // online | onsite
}
export const jobs: TJob[] = [
  {
    id: "job_001",
    title: "Frontend Developer",
    company: "TechNova Ltd",
    type: "onsite", // onsite | online
    status: "open", // open | closed | paused
    location: "Kigali, Rwanda",
    salaryRange: "$800 - $1500",
    experienceLevel: "Mid",
    postedAt: "2026-04-01",
    startHiringAt: "2026-04-05",
    endHiringAt: "2026-04-20",
    applicants: 24,
  },
  {
    id: "job_002",
    title: "Backend Engineer",
    company: "CloudCore",
    type: "online",
    status: "open",
    location: "Remote",
    salaryRange: "$1200 - $2000",
    experienceLevel: "Senior",
    postedAt: "2026-03-28",
    startHiringAt: "2026-04-02",
    endHiringAt: "2026-04-18",
    applicants: 40,
  },
  {
    id: "job_003",
    title: "UI/UX Designer",
    company: "PixelCraft",
    type: "onsite",
    status: "paused",
    location: "Kigali, Rwanda",
    salaryRange: "$700 - $1200",
    experienceLevel: "Junior",
    postedAt: "2026-03-25",
    startHiringAt: "2026-04-01",
    endHiringAt: "2026-04-15",
    applicants: 18,
  },
  {
    id: "job_004",
    title: "Mobile App Developer",
    company: "Appify",
    type: "online",
    status: "closed",
    location: "Remote",
    salaryRange: "$1000 - $1800",
    experienceLevel: "Mid",
    postedAt: "2026-03-20",
    startHiringAt: "2026-03-25",
    endHiringAt: "2026-04-10",
    applicants: 55,
  },
  {
    id: "job_005",
    title: "Data Analyst",
    company: "Insight Hub",
    type: "onsite",
    status: "open",
    location: "Kigali, Rwanda",
    salaryRange: "$900 - $1600",
    experienceLevel: "Mid",
    postedAt: "2026-04-03",
    startHiringAt: "2026-04-06",
    endHiringAt: "2026-04-25",
    applicants: 12,
  },
];
