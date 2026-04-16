import { SiteHeader } from "@/features/_layout/site-header";
import { EditJobForm } from "@/features/jobs/job/edit-form";
import { jobs } from "@/features/jobs/table/data";

export default async function JobEditPage(props: PageProps<"/jobs/[id]">) {
  const { id } = await props.params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div>
        <SiteHeader title="Job Not Found" />
        <div className="container flex flex-1 flex-col">
          <p>The job you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SiteHeader title="Edit Job" />
      <div className="container flex flex-1 flex-col py-10">
        <EditJobForm job={job} />
      </div>
    </div>
  );
}
