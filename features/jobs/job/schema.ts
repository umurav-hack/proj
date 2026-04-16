import * as z from "zod";

export const jobFormSchema = z.object({
  title: z
    .string()
    .min(5, "Job title must be at least 5 characters.")
    .max(100, "Job title must be at most 100 characters."),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters.")
    .max(50, "Company name must be at most 50 characters."),
  type: z.enum(["online", "onsite"]).catch("online"),
  status: z.enum(["open", "closed", "paused"]).catch("open"),
  location: z
    .string()
    .min(2, "Location must be at least 2 characters.")
    .max(50, "Location must be at most 50 characters."),
  salaryRange: z
    .string()
    .min(5, "Salary range must be at least 5 characters.")
    .max(30, "Salary range must be at most 30 characters."),
  experienceLevel: z.enum(["Junior", "Mid", "Senior"]).catch("Mid"),
  startHiringAt: z.string().min(1, "Start hiring date is required."),
  endHiringAt: z.string().min(1, "End hiring date is required."),
});

export type TJobFormSchema = z.infer<typeof jobFormSchema>;
