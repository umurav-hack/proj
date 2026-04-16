import * as z from "zod";

export const applicantFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name must be at most 50 characters."),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name must be at most 50 characters."),
  email: z.string().email("Please enter a valid email address."),
  headline: z
    .string()
    .min(5, "Headline must be at least 5 characters.")
    .max(100, "Headline must be at most 100 characters."),
  location: z
    .string()
    .min(2, "Location must be at least 2 characters.")
    .max(50, "Location must be at most 50 characters."),
  status: z.enum(["pending", "shortlisted", "rejected"]).catch("pending"),
  bio: z.string().max(500, "Bio must be at most 500 characters.").optional(),
});

export type TApplicantFormSchema = z.infer<typeof applicantFormSchema>;
