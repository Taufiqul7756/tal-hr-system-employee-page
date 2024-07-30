"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

type Props = {};

export default function CalendarPage(props: Props) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="grid grid-grow w-full h-full bg-white rounded-md border">
      {/* <div className="bg-secondaryBasic"> Jan</div> */}
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full h-full"
        />
      </div>
      <div className="bg-secondaryBasic flex justify-around items-center">
        <div className="flex justify-center items-center gap-2">
          <span className="bg-holiday size-4"></span>
          <div>Govt Holiday</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span className="bg-leave size-4"></span>
          <div>Leave</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span className="bg-today size-4"></span>
          <div>Today</div>
        </div>
      </div>
    </div>
  );
}
