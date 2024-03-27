import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export async function GET(res: Response) {
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

    return NextResponse.json(
      {
        chats: _chats,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
