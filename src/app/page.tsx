import Approval from "@/components/dashboard/Approval";
import Calendar from "@/components/dashboard/Calendar";
import Clock from "@/components/dashboard/Clock";
import { House } from "lucide-react";

export default function Home() {
  return (
    <main className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <House />
        <span>Dashboard</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          <Clock />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <Calendar />
        </div>
      </div>
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <Approval />
      </div>
    </main>
  );
}
