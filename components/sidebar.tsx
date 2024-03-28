"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { FileText, Loader2, PlusCircle } from "lucide-react";
import { DrizzleChat } from "@/lib/db/schema";
import axios from "axios";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

export const Sidebar = () => {
  const [chats, setChats] = useState<DrizzleChat[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadChats = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/chats");
        setChats(response.data.chats ?? []);
      } catch (error) {
        console.error("Error loading chats:", error);
      }
      setIsLoading(false);
    };

    loadChats();
  }, []);

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#161618] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image alt="Logo" src="/logo.png" width={50} height={50} />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            PDF Q&A Assistant
          </h1>
        </Link>
        <Link href="/dashboard">
          <div className="w-full border-dashed border-white border flex items-center py-2 px-4 rounded-md text-white hover:bg-gray-800">
            <PlusCircle className="mr-2 w-4 h-4" />
            New Chat
          </div>
        </Link>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <Loader2 className="h-10 w-10 text-red-500 animate-spin" />
            <p className="mt-2 text-sm text-slate-400">Loading...</p>
          </div>
        ) : (
          <div className="space-y-1 mt-10 overflow-y-auto h-full overflow-x-hidden">
            {chats.length === 0 ? (
              <p className="text-slate-300 text-center mt-10">
                No chats available
              </p>
            ) : (
              chats.map((chat) => (
                <Link key={chat.id} href={`/chat/${chat.id}`}>
                  <div
                    className={cn(
                      "rounded-lg p-3 text-slate-300 flex items-center",
                      {
                        "bg-red-600 text-white": selectedChatId === chat.id,
                        "hover:text-white": selectedChatId !== chat.id,
                      }
                    )}
                    onClick={() => setSelectedChatId(chat.id)}
                  >
                    <FileText className="mr-2" />
                    <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
                      {chat.pdfName}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
