import { SiteHeader } from "@/features/_layout/site-header";
import { NewApplicantForm } from "@/features/applications/applicant/new-form";

export default function NewApplicant() {
  return (
    <div>
      <SiteHeader title="Add New Applicant" />
      <div className="container flex flex-1 flex-col">
        <NewApplicantForm />
      </div>
    </div>
  );
}
