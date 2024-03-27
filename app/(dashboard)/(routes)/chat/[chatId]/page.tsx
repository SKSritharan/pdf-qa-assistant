import ChatComponent from "@/components/chat-component";
import PDFViewer from "@/components/pdf-viewer";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    chatId: string;
  };
};

const ChatPage = async ({ params: { chatId } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/sign-in");
  }
  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
  if (!_chats) {
    return redirect("/");
  }
  if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
    return redirect("/");
  }

  const currentChat = _chats.find((chat) => chat.id === parseInt(chatId));

  return (
    <div className="flex max-h-screen">
      {/* PDF viewer */}
      <div className="flex-1 p-4 max-h-screen">
        <PDFViewer pdf_url={currentChat?.pdfUrl || ""} />
      </div>
      {/* Chat component */}
      <div className="flex-1 border-l border-gray-200 overflow-y-auto max-h-screen">
        <ChatComponent chatId={parseInt(chatId)} />
      </div>
    </div>
  );
};

export default ChatPage;
