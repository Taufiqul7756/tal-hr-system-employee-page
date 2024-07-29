import Approval from "@/components/dashboard/Approval";
import CalendarPage from "@/components/dashboard/CalendarPage";
import Clock from "@/components/dashboard/Clock";
import { House } from "lucide-react";

export default function Home() {
  return (
    <main className="p-8">
      <div className="flex items-center gap-3 mb-10">
        <House />
        <span>Dashboard</span>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div>
            <Clock />
          </div>
          <div className="">
            <Approval />
          </div>
        </div>
        <div className="lg:col-span-1">
          <CalendarPage />
        </div>
      </div>
    </main>
  );
}
