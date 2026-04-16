import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/table/data-table";
import { columns } from "./columns";
import { applicants } from "./data";

export default function ApplicantsTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={applicants}
        headerChildren={
          <Button asChild size="sm">
            <Link href="/applications/new">Add Applicant</Link>
          </Button>
        }
      />
    </div>
  );
}
