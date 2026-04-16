import { SiteHeader } from "@/features/_layout/site-header";
import { NewJobForm } from "@/features/jobs/job/new-form";

export default function NewJob() {
  return (
    <div>
      <SiteHeader title="New job" />
      <div className="container flex flex-1 flex-col">
        <NewJobForm />
      </div>
    </div>
  );
}
