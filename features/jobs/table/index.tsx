import { DataTable } from "@/components/ui/table/data-table";
import { columns } from "./columns";
import { jobs } from "./data";

export default function JobsTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={jobs} />
    </div>
  );
}
