import { FileText } from "lucide-react";
import * as React from "react";

type Props = {};

export default function attendancePage(props: Props) {
  return (
    <div className="flex justify-start items-center gap-3">
      {" "}
      <FileText /> Attendance Page
    </div>
  );
}
