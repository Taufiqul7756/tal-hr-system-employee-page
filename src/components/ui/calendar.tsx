"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = Array.from(new Array(100), (val, index) => index + 1960);

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [selectedMonth, setSelectedMonth] = React.useState(
    new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = React.useState(
    new Date().getFullYear()
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4 bg-secondaryBasic p-4 px-8">
        <div className="">
          <select
            className="bg-secondaryBasic"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          >
            {months.map((month, index) => (
              <option className="bg-white" key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="bg-secondaryBasic "
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          >
            {years.map((year) => (
              <option className="bg-white" key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <DayPicker
        showOutsideDays={showOutsideDays}
        month={new Date(selectedYear, selectedMonth)}
        onMonthChange={(date) => {
          setSelectedMonth(date.getMonth());
          setSelectedYear(date.getFullYear());
        }}
        className={cn("p-3", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "hidden",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-basic text-accent-foreground",
          day_outside:
            "day-basic text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
