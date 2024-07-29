"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

type Props = {};

export default function CalendarPage(props: Props) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="grid grid-grow w-full h-full bg-white rounded-md border">
      <div className="bg-secondaryBasic"> Jan</div>
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full h-full"
        />
      </div>
      <div className="bg-secondaryBasic p-2 flex justify-around items-center">
        <div className="flex">
          <div>Govt Holiday</div>
        </div>
        <span>Leave</span>
        <span>Today</span>
      </div>
    </div>
  );
}
