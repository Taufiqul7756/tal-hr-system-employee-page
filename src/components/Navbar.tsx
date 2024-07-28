"use client";

import React from "react";
import Image from "next/image";
import { Bell, HelpCircle, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../../public/logo.png";
import taufiq from "../../public/images/taufiq.jpg";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex justify-between items-center px-12 py-4  bg-white">
      {/* Div 1: Logo and Text */}
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <Image src={logo} width={40} height={40} alt="Logo" />
          <span className="text-lg font-bold text-basic ">Tal Manager</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-20">
        {/* Div 2: Notification Icon, Circle Profile Image, FAQ Icon */}
        <div className="flex items-center space-x-8 ">
          <Bell className="w-6 h-6 p-1 rounded-full bg-notificationBtn text-notificationBtnText cursor-pointer" />
          <div className="flex justify-center items-center gap-2">
            <Image
              src={taufiq}
              width={28}
              height={28}
              alt="Profile"
              className="rounded-full cursor-pointer"
            />
            <span>Taufiqul Islam</span>
          </div>
          <HelpCircle className="w-[18px] h-[18px] text-faq cursor-pointer" />
        </div>

        {/* Div 4: Logout Button */}
        <div className="flex items-center">
          <Button
            variant="secondary"
            className="bg-logBtn text-logBtnText px-4 py-2 rounded-lg gap-2"
          >
            LOG OUT
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
