import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/table/data-table";
import { columns } from "./columns";
import { jobs } from "./data";

export default function JobsTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={jobs}
        headerChildren={
          <Button asChild size="sm">
            <Link href="/jobs/new">Add Job</Link>
          </Button>
        }
      />
    </div>
  );
}
