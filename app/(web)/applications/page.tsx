import { SiteHeader } from "@/features/_layout/site-header";
import { AnalyticCards } from "@/features/applications/analytic-cards";
import ApplicantsTable from "@/features/applications/table";

export default function Applications() {
  return (
    <div>
      <SiteHeader title="Applications" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <AnalyticCards />
            <ApplicantsTable />
          </div>
        </div>
      </div>
    </div>
  );
}
