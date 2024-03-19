"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

export const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#161618] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Genius
          </h1>
        </Link>
        <Link href="/dashboard">
          <Button
            variant="ghost"
            className="w-full border-dashed border-white border"
          >
            <PlusCircle className="mr-2 w-4 h-4" />
            New Chat
          </Button>
        </Link>
        <div className="space-y-1"></div>
      </div>
    </div>
  );
};
