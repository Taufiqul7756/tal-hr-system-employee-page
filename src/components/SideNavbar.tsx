"use client";

import React, { useState } from "react";
import { Nav } from "./ui/nav";

import {
  Archive,
  File,
  House,
  CalendarDays,
  MessageCircleQuestion,
  FolderX,
  FileText,
  BookPlus,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Task from "../../public/images/task.png";
import { Button } from "./ui/button";
import taufiq from "../../public/images/taufiq.jpg";
import Image from "next/image";

type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="relative min-w-[80px]  shadow px-6 pb-10 pt-10">
      <div className="grid justify-center items-center gap-2 pb-10">
        <div>
          <Image src={taufiq} width={50} height={50} alt="" />
        </div>
        {isCollapsed ? (
          <div className="pb-[83px]"></div>
        ) : (
          <div className="grid justify-center items-center">
            <span className="text-lg">Taufiqul Islam</span>
            <span className="text-lg text-[#96C291]">Software Engineer </span>
          </div>
        )}
      </div>

      <div className=" absolute right-[-16px] top-7 ">
        <Button
          onClick={toggleSidebar}
          variant="secondary"
          className="rounded-full p-1 size-7  text-[#96C291] bg-[#DAE9D9]"
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: House,
            variant: "default",
          },
          {
            title: "Task",
            href: "/task",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Attendance",
            href: "/attendance",
            icon: FileText,
            variant: "ghost",
          },
          {
            title: "Leave",
            href: "/leave",
            icon: FolderX,
            variant: "ghost",
          },
          {
            title: "Asset",
            href: "/asset",
            icon: BookPlus,
            variant: "ghost",
          },
          {
            title: "Holiday",
            href: "/holiday",
            icon: CalendarDays,
            variant: "ghost",
          },
          {
            title: "Accounts",
            href: "/accounts",
            icon: Archive,
            variant: "ghost",
          },
          {
            title: "Training",
            href: "/training",
            icon: Archive,
            variant: "ghost",
          },
          {
            title: "IT Support",
            href: "/it-support",
            icon: MessageCircleQuestion,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
