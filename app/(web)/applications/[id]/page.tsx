import { SiteHeader } from "@/features/_layout/site-header";
import { EditApplicantForm } from "@/features/applications/applicant/edit-form";
import { applicants } from "@/features/applications/table/data";

export default async function ApplicantEditPage(
  props: PageProps<"/applications/[id]">,
) {
  const { id } = await props.params;
  const applicant = applicants.find((a) => a.id === id);

  if (!applicant) {
    return (
      <div>
        <SiteHeader title="Applicant Not Found" />
        <div className="container flex flex-1 flex-col">
          <p>The applicant you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SiteHeader title="Edit Applicant" />
      <div className="container flex flex-1 flex-col py-10">
        <EditApplicantForm applicant={applicant} />
      </div>
    </div>
  );
}
