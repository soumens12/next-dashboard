
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

export default function ProductsTableSkeleton() {
  return (
    <div className="mt-6 rounded-lg border-none bg-cyan-500/10 p-4">
      <Table className="backdrop-blur-md">
        <TableHeader className="border-none">
          <TableRow className="border-none">
            {Array.from({ length: 4 }).map((_, i) => (
              <TableHead key={i}>
                <Skeleton className="h-8 w-full bg-cyan-500/10" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 6 }).map((_, r) => (
            <TableRow key={r} className="border-none">
              {Array.from({ length: 4 }).map((_, c) => (
                <TableCell key={c}>
                  <Skeleton className="h-8 w-full bg-cyan-500/10" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
