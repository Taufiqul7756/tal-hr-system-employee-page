import * as React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationLast,
  PaginationFirst,
} from "@/components/ui/pagination";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {};

type Status = "Pending" | "Success" | "Rejected";

interface ApprovalData {
  date: string;
  leaveType: string;
  duration: string;
  status: Status;
}

const approvalData: ApprovalData[] = [
  {
    date: "Jan 01, 2024",
    leaveType: "Sick",
    duration: "2 days (5,6) Jan",
    status: "Pending",
  },
  {
    date: "Jan 01, 2024",
    leaveType: "Sick",
    duration: "2 days (5,6) Jan",
    status: "Rejected",
  },
  {
    date: "Jan 01, 2024",
    leaveType: "Sick",
    duration: "2 days (5,6) Jan",
    status: "Pending",
  },
  {
    date: "Jan 01, 2024",
    leaveType: "Sick",
    duration: "2 days (5,6) Jan",
    status: "Success",
  },
  {
    date: "Jan 01, 2024",
    leaveType: "Sick",
    duration: "2 days (5,6) Jan",
    status: "Rejected",
  },
];

const statusClasses = {
  Pending:
    "bg-statusPending text-statusPendingText mt-3 px-3 py-1 rounded-sm inline-block",
  Success:
    "bg-statusSuccess text-statusSuccessText mt-3 px-3 py-1 rounded-sm inline-block",
  Rejected:
    "bg-statusReject text-statusRejectText mt-3 px-3 py-1 rounded-sm inline-block",
};
export default function Approval(props: Props) {
  return (
    <div className="bg-white rounded-md">
      <div className="px-5 py-5">
        <span className="text-basic text-lg">Approval</span>
      </div>
      <Table className="">
        <TableHeader className="bg-tableHeaderBg ">
          <TableRow className="">
            <TableHead className="">Date Application</TableHead>
            <TableHead className="">Leave type</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {approvalData.map((data) => (
            <TableRow key={data.date} className="border-0">
              <TableCell className="font-medium">{data.date}</TableCell>
              <TableCell>{data.leaveType}</TableCell>
              <TableCell>{data.duration}</TableCell>
              <TableCell className={statusClasses[data.status]}>
                {data.status}
              </TableCell>
              <TableCell className="">
                <BsThreeDotsVertical />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>

      <div className=" py-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationFirst href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLast href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
