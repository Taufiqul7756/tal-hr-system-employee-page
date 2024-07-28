import { CalendarDays } from "lucide-react";
import * as React from "react";

type Props = {};

export default function holidayPage(props: Props) {
  return (
    <div className="flex justify-start items-center gap-3">
      {" "}
      <CalendarDays /> Holiday Page
    </div>
  );
}
