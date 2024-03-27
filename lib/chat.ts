import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";

export async function fetchChats() {
  try {
    // Ensure user is authenticated
    const { userId } = await auth();
    if (!userId) {
      // Redirect user to sign-in page if not authenticated
      redirect("/sign-in");
    }

    // Fetch chats for the authenticated user
    const _chats = await db
      .select()
      .from(chats)
      .where(eq(chats.userId, userId));

    console.log(_chats);

    return _chats;
  } catch (error) {
    console.error("Error fetching chats:", error);
    return null;
  }
}
